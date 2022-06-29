import { ICharSheet } from 'src/app/interfaces/charsheet.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html'
})
export class CharComponent implements OnInit {
  title: string = 'profil';
  formName: string = 'char';
  form: UntypedFormGroup;
  constructor(public personaService: PersonaService) { }

  ngOnInit() {
    this.form = new UntypedFormGroup({});
    const sheetObject: ICharSheet = this.personaService.currentPersona.sheets[this.formName];

    for (const key in sheetObject) {
      if (key) {
        this.form.addControl(key, new UntypedFormControl(sheetObject[key]));
      }
    }
  }

  updateSheet(gender?: string) {
    this.form.get('sexe').setValue(gender);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
