import { ICampSheet } from 'src/app/interfaces/campsheet.interface';
import { RouteData } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html'
})
export class CampComponent implements OnInit {
  title: string;
  subtitle: string;
  formName: string;
  form: FormGroup;
  totalWeight: number = 0;
  campNames: string[] = ['tente', 'matelas', 'couverture'];

  get autres() {
    return <FormArray>this.form.get('autres');
  }

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit(): void {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.formName = res.formName;

      this.form = new FormGroup({});
      const sheetObject: ICampSheet = this.personaService.currentPersona.sheets[this.formName];

      for (const key in sheetObject) {
        if (key !== 'autres') {
          this.form.addControl(key, new FormGroup({}));
          for (const prop in sheetObject[key]) {
            if (prop) {
              (this.form.get(key) as FormGroup).addControl(prop, new FormControl(sheetObject[key][prop]));
            }
          }
        } else {
          this.form.addControl(key, new FormArray([]));
          sheetObject[key].forEach(other => {
            (this.form.get(key) as FormArray).push(new FormGroup({ name: new FormControl(other.name), wei: new FormControl(other.wei) }));
          });
        }
      }

      this.updateTotalWeight();
    });
  }

  updateTotalWeight() {
    this.totalWeight = Number(this.form.get('tente').get('wei').value)
      + Number(this.form.get('matelas').get('wei').value)
      + Number(this.form.get('couverture').get('wei').value)
      + this.form.get('autres').value.reduce((a, b) => a + b.wei, 0);

    this.totalWeight = Math.round(this.totalWeight * 10) / 10;

    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem() {
    (this.form.get('autres') as FormArray).push(new FormGroup({ name: new FormControl(), wei: new FormControl() }));
    this.updateTotalWeight();
  }

  removeItem(i: number) {
    (this.form.get('autres') as FormArray).removeAt(i);
    this.updateTotalWeight();
  }
}
