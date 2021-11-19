import { ARMORS_SLOTS } from 'src/app/enums/armors.enum';
import { STATS_NAMES } from 'src/app/enums/stats.enum';
import { IStatSheet } from 'src/app/interfaces/statsheet.interface';
import { Armor, ArmorSheet } from 'src/app/models/armorsheet.model';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html'
})
export class ArmorComponent implements OnInit {
  title: string = 'armure et protection';
  formName: string = 'armors';
  opens: boolean[] = [];
  form: FormGroup;
  armorNames = [ARMORS_SLOTS.HEAD, ARMORS_SLOTS.TORSO, ARMORS_SLOTS.SHIELD, ARMORS_SLOTS.ARMS, ARMORS_SLOTS.HANDS, ARMORS_SLOTS.LEGS, ARMORS_SLOTS.FEET, ARMORS_SLOTS.RINGS, ARMORS_SLOTS.CAPES, ARMORS_SLOTS.OTHERS];
  statsCodes: string[] = Object.keys(this.personaService.currentPersona.sheets['stats']);;
  statsNames: string[] = [STATS_NAMES.EV, STATS_NAMES.EA, STATS_NAMES.COU, STATS_NAMES.INT, STATS_NAMES.CHA, STATS_NAMES.AD, STATS_NAMES.FO, STATS_NAMES.ATQ, STATS_NAMES.PRD];
  prNat: number;
  prMag: number;
  tdm: number;

  get list() {
    return <FormArray>this.form.get('list');
  }

  get effects() {
    return (i: number) => this.list.at(i).get('effects') as FormArray
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public personaService: PersonaService) { }

  ngOnInit() {
    this.form = this.fb.group({ list: this.fb.array([]) });

    const sheetObject: ArmorSheet = this.personaService.currentPersona.sheets[this.formName];

    /** Note: Remove unused properties from old data format */
    delete sheetObject['prNat'];
    delete sheetObject['prMag'];

    sheetObject.list.forEach((armor: Armor, index: number) => {
      this.list.push(
        this.fb.group({
          type: armor.type ? armor.type : this.armorNames[index],
          name: armor.name,
          pr: armor.pr,
          rup: armor.rup,
          equiped: armor.equiped,
          effects: this.fb.array([])
        })
      );

      const effects: FormArray = this.list.at(sheetObject.list.indexOf(armor)).get('effects') as FormArray;
      armor.effects.forEach(effect =>
        effects.push(this.fb.group({ name: effect.name, effect: effect.effect }))
      );

      this.opens.push(false);
    });

    this.updateSheet();
  }

  updateSheet() {
    const prSum = this.form
      .get('list').value
      .filter(armor => armor.equiped)
      .map(armor => Number(armor.pr))
      .reduce((a: number, b: number) => a + b, 0);

    this.tdm = this.personaService.currentPersona.sheets['skills'].includes('truc de mauviette (pr)') ? 1 : 0;
    this.prNat = prSum + this.tdm;

    const statsSheet: IStatSheet = this.personaService.currentPersona.sheets['stats'];
    this.prMag = Math.ceil(Number(statsSheet.cou.name + statsSheet.int.name + statsSheet.fo.name) / 3);

    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addArmor(armor: any) {
    if (armor.value) {
      this.list.push(
        this.fb.group({
          type: armor.value,
          name: '',
          pr: '',
          rup: '',
          equiped: false,
          effects: this.fb.array([])
        })
      );
      armor.value = '';
      this.updateSheet();
    }
  }

  equipArmor(equiped: boolean, i: number) {
    this.list.at(i).get('equiped').setValue(equiped ? false : true);
    this.updateSheet();
  }

  removeArmor(i: number) {
    this.list.removeAt(i);
    this.opens.splice(i, 1);
    this.updateSheet();
  }

  addEffect(i: number) {
    const armorsList = this.list.at(i);
    (armorsList.get('effects') as FormArray).push(this.fb.group({ name: 'ev', effect: '' }));
    this.updateSheet();
  }

  removeEffect(i: number, j: number) {
    const armorsList = this.list.at(i);
    (armorsList.get('effects') as FormArray).removeAt(j);
    this.updateSheet();
  }
}
