import { WeaponSlots } from 'src/app/enums/weapons.enum';
import { Weapon } from 'src/app/models/weapon.model';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder } from '@angular/forms';
import { statsObject } from 'src/app/consts/stats-object.const';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html'
})
export class WeaponComponent implements OnInit {
  title: string = 'armement et baston';
  formName: string = 'weapons';
  opens: boolean[] = [];
  form: UntypedFormArray;
  weaponNames: string[] = Object.values(WeaponSlots);
  statsObject = statsObject;

  get effects() {
    return (i: number) => this.form.at(i).get('effects') as UntypedFormArray
  }

  constructor(private fb: UntypedFormBuilder, public personaService: PersonaService) { }

  ngOnInit() {
    this.form = new UntypedFormArray([]);
    const sheetObject: Weapon[] = this.personaService.currentPersona.sheets[this.formName];

    sheetObject.forEach((weapon: Weapon, index: number) => {
      this.form.push(
        this.fb.group({
          type: weapon.type ? weapon.type : this.weaponNames[index],
          name: weapon.name,
          pi: weapon.pi,
          rup: weapon.rup,
          equiped: weapon.equiped,
          effects: this.fb.array([])
        })
      );

      const weaponIndex = sheetObject.indexOf(weapon).toString();
      const effects = this.form.get(weaponIndex).get('effects') as UntypedFormArray;

      weapon.effects.forEach(effect =>
        effects.push(this.fb.group({ name: effect.name, effect: effect.effect }))
      );

      /** TODO: Hack due to weapon component not being destroyed on navigation */
      this.opens = [];
      this.opens.push(false);
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addWeapon(event) {
    if (event.detail.value) {
      this.form.push(
        this.fb.group({
          type: event.detail.value,
          name: '',
          pi: '',
          rup: '',
          equiped: false,
          effects: this.fb.array([])
        })
      );
      this.updateSheet();
    }
  }

  clearWeaponSelect(weaponSelect) {
    weaponSelect.value = null;
  }

  equipWeapon(equiped: boolean, i: number) {
    this.form.at(i).get('equiped').setValue(equiped ? false : true);
    this.updateSheet();
  }

  removeWeapon(i: number) {
    this.form.removeAt(i);
    this.opens.splice(i, 1);
    this.updateSheet();
  }

  getEffectName(code): string {
    return statsObject.find(stat => stat.code === code).name;
  }

  addEffect(event, i) {
    if (event.detail.value) {
      (this.form.at(i).get('effects') as UntypedFormArray).push(this.fb.group({ name: event.detail.value, effect: '' }));
      this.updateSheet();
    }
  }

  clearEffectSelect(effectSelect) {
    effectSelect.value = null;
  }

  removeEffect(i: number, j: number) {
    (this.form.at(i).get('effects') as UntypedFormArray).removeAt(j);
    this.updateSheet();
  }
}
