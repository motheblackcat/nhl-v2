import { ArmorSlots } from 'src/app/enums/armors.enum';
import { IStatSheet } from 'src/app/interfaces/statsheet.interface';
import { Armor, ArmorSheet } from 'src/app/models/armorsheet.model';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { statsObject } from 'src/app/consts/stats-object.const';

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
  armorNames: string[] = Object.values(ArmorSlots);
  statsObject = statsObject;

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

  addArmor(event) {
    if (event.detail.value) {
      this.list.push(
        this.fb.group({
          type: event.detail.value,
          name: '',
          pr: '',
          rup: '',
          equiped: false,
          effects: this.fb.array([])
        })
      );
      this.updateSheet();
    }
  }

  clearArmorSelect(armorSelect) {
    armorSelect.value = null;
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

  getEffectName(code): string {
    return statsObject.find(stat => stat.code === code).name;
  }


  addEffect(event, i: number) {
    if (event.detail.value) {
      const armorsList = this.list.at(i);
      (armorsList.get('effects') as UntypedFormArray).push(this.fb.group({ name: event.detail.value, effect: '' }));
      this.updateSheet();
    }
  }

  clearEffectSelect(effectSelect) {
    effectSelect.value = null;
  }

  removeEffect(i: number, j: number) {
    const armorsList = this.list.at(i);
    (armorsList.get('effects') as UntypedFormArray).removeAt(j);
    this.updateSheet();
  }
}
