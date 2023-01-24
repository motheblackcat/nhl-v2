import { STATS_NAMES } from 'src/app/consts/stats-names.const';
import { WeaponSlots } from 'src/app/enums/weapons.enum';
import { Weapon } from 'src/app/models/weapon.model';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html'
})
export class WeaponComponent implements OnInit {
  title: string = 'armement et baston';
  formName: string = 'weapons';
  opens: boolean[] = [];
  form: UntypedFormArray;
  statsCodes: string[] = Object.keys(this.personaService.currentPersona.sheets['stats']);;
  statsNames = STATS_NAMES;
  weaponNames: string[] = [WeaponSlots.MAIN, WeaponSlots.SUB, WeaponSlots.EXTRA];

  get effects() {
    return (i: number) => this.form.at(i).get('effects') as UntypedFormArray
  }

  constructor(private route: ActivatedRoute, private fb: UntypedFormBuilder, public personaService: PersonaService) { }

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

      /** Todo: Hack due to weapon component not being destroyed on navigation */
      this.opens = [];
      this.opens.push(false);
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addWeapon(weapon: any) {
    if (weapon.value) {
      this.form.push(
        this.fb.group({
          type: weapon.value,
          name: '',
          pi: '',
          rup: '',
          equiped: false,
          effects: this.fb.array([])
        })
      );
      weapon.value = '';
      this.updateSheet();
    }
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

  addEffect(i: number) {
    (this.form.at(i).get('effects') as UntypedFormArray).push(this.fb.group({ name: 'ev', effect: '' }));
    this.updateSheet();
  }

  removeEffect(i: number, j: number) {
    (this.form.at(i).get('effects') as UntypedFormArray).removeAt(j);
    this.updateSheet();
  }
}
