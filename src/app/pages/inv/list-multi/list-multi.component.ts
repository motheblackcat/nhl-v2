import { IEffect } from 'src/app/interfaces/effect.interface';
import { RouteData } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-multi',
  templateUrl: './list-multi.component.html'
})
export class ListMultiComponent implements OnInit {
  title: string;
  subtitle: string;
  nameLabel: string;
  effectLabel: string;
  formName: string;
  form: UntypedFormArray;

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.nameLabel = res.nameLabel;
      this.effectLabel = res.effectLabel;
      this.formName = res.formName;

      this.form = new UntypedFormArray([]);
      const sheetObject: IEffect[] = this.personaService.currentPersona.sheets[this.formName] ? this.personaService.currentPersona.sheets[this.formName] : [];

      sheetObject.forEach(item => {
        this.form.push(new UntypedFormGroup({ name: new UntypedFormControl(item.name), effect: new UntypedFormControl(item.effect) }));
      });
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem() {
    this.form.push(new UntypedFormGroup({ name: new UntypedFormControl(), effect: new UntypedFormControl() }));
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  deleteItem(i: number) {
    this.form.removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
