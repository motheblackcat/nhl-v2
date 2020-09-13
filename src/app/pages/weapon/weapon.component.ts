import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormArrayName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { Weapon } from 'src/app/models/persona.model';

import { RouteData } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html'
})
export class WeaponComponent implements OnInit {
  title: string;
  formName: string;
  form: FormArray;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.formName;
      this.form = new FormArray([]);
      const sheetObject: Weapon[] = this.personaService.currentPersona.sheet[this.formName];
      if (sheetObject.length <= 0) {
        for (let i = 0; i < 3; i++) {
          sheetObject.push(new Weapon());
        }
      }
      sheetObject.forEach(weapon => {
        this.form.push(
          new FormGroup({
            name: new FormControl(weapon.name),
            pi: new FormControl(weapon.pi),
            rup: new FormControl(weapon.rup),
            equiped: new FormControl(weapon.equiped),
            effects: new FormArray([])
          })
        );
        const weaponIndex = sheetObject.indexOf(weapon).toString();
        const effects = this.form.get(weaponIndex).get('effects') as FormArray;
        weapon.effects.forEach(effect =>
          effects.push(new FormGroup({ name: new FormControl(effect.name), effect: new FormControl(effect.effect) }))
        );
      });
    });
  }

  updateEffects() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem(i: number) {
    (this.form.at(i).get('effects') as FormArray).push(new FormGroup({ name: new FormControl(), effect: new FormControl() }));
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  removeItem(i: number, j: number) {
    (this.form.at(i).get('effects') as FormArray).removeAt(j);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
