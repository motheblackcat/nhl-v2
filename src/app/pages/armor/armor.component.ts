import { STATS_NAMES } from 'src/app/consts/stats-names.const';
import { ArmorSlots } from 'src/app/enums/armors.enum';
import { IStatSheet } from 'src/app/interfaces/statsheet.interface';
import { Armor, ArmorSheet } from 'src/app/models/armorsheet.model';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html'
})
export class ArmorComponent implements OnInit {
  title: string = 'armure et protection';
  formName: string = 'armors';
  tdm: number = 0;
  prNat: number;
  prMag: number;
  form: UntypedFormGroup;
  opens: boolean[] = [];
  armorNames: string[] = [ArmorSlots.HEAD, ArmorSlots.TORSO, ArmorSlots.SHIELD, ArmorSlots.ARMS, ArmorSlots.HANDS, ArmorSlots.LEGS, ArmorSlots.FEET, ArmorSlots.RINGS, ArmorSlots.CAPES, ArmorSlots.OTHERS];
  statsNames = STATS_NAMES;
  statsCodes: string[] = Object.keys(this.personaService.currentPersona.sheets['stats']);;

  get list() {
    return <UntypedFormArray>this.form.get('list');
  }

  get effects() {
    return (i: number) => this.list.at(i).get('effects') as UntypedFormArray
  }

  constructor(private fb: UntypedFormBuilder, private router: Router, private personaService: PersonaService) { }

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

      const effects: UntypedFormArray = this.list.at(sheetObject.list.indexOf(armor)).get('effects') as UntypedFormArray;
      armor.effects.forEach(effect =>
        effects.push(this.fb.group({ name: effect.name, effect: effect.effect }))
      );

      this.opens.push(false);
    });

    this.updateSheet();
  }

  updateSheet() {
    this.prNat = this.form
      .get('list').value
      .filter(armor => armor.equiped)
      .map(armor => Number(armor.pr))
      .reduce((a: number, b: number) => a + b, 0);

    this.router.events.subscribe(() => {
      this.tdm = this.personaService.currentPersona.sheets['skills'].includes('truc de mauviette (pr)') ? 1 : 0;
    });

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
    (armorsList.get('effects') as UntypedFormArray).push(this.fb.group({ name: 'ev', effect: '' }));
    this.updateSheet();
  }

  removeEffect(i: number, j: number) {
    const armorsList = this.list.at(i);
    (armorsList.get('effects') as UntypedFormArray).removeAt(j);
    this.updateSheet();
  }
}
