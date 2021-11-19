import { IBagsSheet } from 'src/app/interfaces/bagsheet.interface';
import { RouteData } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html'
})
export class BagsComponent implements OnInit {
  title: string;
  subtitle: string;
  formName: string;
  form: FormGroup;
  get bags() { return <FormArray>this.form.get('bags') };
  get pooches() { return <FormArray>this.form.get('pooches') };

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.formName = res.formName;

      this.form = new FormGroup({});
      const sheetObject: IBagsSheet = this.personaService.currentPersona.sheets[this.formName];
      for (const key in sheetObject) {
        if (key === 'max') {
          this.form.addControl(key, new FormControl(sheetObject[key]));
        } else {
          this.form.addControl(key, new FormArray([]));
          sheetObject[key].forEach(bag => {
            (this.form.get(key) as FormArray).push(new FormGroup({ name: new FormControl(bag.name), max: new FormControl(bag.max) }));
          });
        }
      }
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem(array: string) {
    (this.form.get(array) as FormArray).push(new FormGroup({ name: new FormControl(), max: new FormControl() }));
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  removeItem(array: string, i: number) {
    (this.form.get(array) as FormArray).removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
