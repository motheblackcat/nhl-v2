import { RouteData } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  title: string;
  subtitle: string;
  placeholder: string;
  formName: string;
  form: UntypedFormArray;

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit(): void {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.placeholder = res.placeholder;
      this.formName = res.formName;

      this.form = new UntypedFormArray([]);
      const sheetObject: string[] = this.personaService.currentPersona.sheets[this.formName] ? this.personaService.currentPersona.sheets[this.formName] : [];

      sheetObject.forEach(skill => this.form.push(new UntypedFormControl(skill)));
    });
  }

  addItem(item: any) {
    if (item.value) {
      this.form.push(new UntypedFormControl(item.value));
      item.value = '';
      this.personaService.updatePersonas(this.formName, this.form.value);
    }
  }

  updateItem() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  deleteItem(i: number): void {
    this.form.removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
