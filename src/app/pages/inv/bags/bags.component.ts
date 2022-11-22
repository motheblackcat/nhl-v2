import { IBagsSheet } from 'src/app/interfaces/bagsheet.interface';
import { RouteData } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html'
})
export class BagsComponent implements OnInit {
  title: string;
  subtitle: string;
  formName: string;
  form: UntypedFormGroup;
  get bags() { return <UntypedFormArray>this.form.get('bags') };
  get pooches() { return <UntypedFormArray>this.form.get('pooches') };

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.formName = res.formName;

      this.form = new UntypedFormGroup({});
      const sheetObject: IBagsSheet = this.personaService.currentPersona.sheets[this.formName];
      for (const key in sheetObject) {
        if (key === 'max') {
          this.form.addControl(key, new UntypedFormControl(sheetObject[key]));
        } else {
          this.form.addControl(key, new UntypedFormArray([]));
          sheetObject[key].forEach(bag => {
            (this.form.get(key) as UntypedFormArray).push(new UntypedFormGroup({ name: new UntypedFormControl(bag.name), max: new UntypedFormControl(bag.max) }));
          });
        }
      }
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem(array: string) {
    (this.form.get(array) as UntypedFormArray).push(new UntypedFormGroup({ name: new UntypedFormControl(), max: new UntypedFormControl() }));
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  removeItem(array: string, i: number) {
    (this.form.get(array) as UntypedFormArray).removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
