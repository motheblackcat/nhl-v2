import { STATS_NAMES } from 'src/app/enums/stats.enum';
import { WEAPONS_SLOTS } from 'src/app/enums/weapons.enum';
import { Weapon } from 'src/app/models/weapon.model';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html'
})
export class WeaponComponent implements OnInit {
  title: string = 'armement et baston';
  formName: string = 'weapons';
  opens: boolean[] = [];
  form: FormArray;
  statsCodes: string[] = Object.keys(this.personaService.currentPersona.sheets['stats']);;
  statsNames: string[] = [STATS_NAMES.EV, STATS_NAMES.EA, STATS_NAMES.COU, STATS_NAMES.INT, STATS_NAMES.CHA, STATS_NAMES.AD, STATS_NAMES.FO, STATS_NAMES.ATQ, STATS_NAMES.PRD];
  weaponNames: string[] = [WEAPONS_SLOTS.MAIN, WEAPONS_SLOTS.SUB, WEAPONS_SLOTS.EXTRA];

  get effects() {
    return (i: number) => this.form.at(i).get('effects') as FormArray
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public personaService: PersonaService) { }

  ngOnInit() {
    this.form = new FormArray([]);
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
      const effects = this.form.get(weaponIndex).get('effects') as FormArray;

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
    (this.form.at(i).get('effects') as FormArray).push(this.fb.group({ name: 'ev', effect: '' }));
    this.updateSheet();
  }

  removeEffect(i: number, j: number) {
    (this.form.at(i).get('effects') as FormArray).removeAt(j);
    this.updateSheet();
  }
}
