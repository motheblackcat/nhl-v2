import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { RouteData } from 'src/app/interfaces/route.interface';
import { BagsSheetModel } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {
  title: string;
  formName: string;
  form: FormGroup;
  get bags() {
    return <FormArray>this.form.get('bags');
  }
  get pooches() {
    return <FormArray>this.form.get('pooches');
  }
  constructor(private route: ActivatedRoute, public personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.formName;

      this.form = new FormGroup({});
      const sheetObject: BagsSheetModel = this.personaService.currentPersona.sheet[this.formName];
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
