import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { PersonaService } from 'src/app/services/persona.service';

import { RouteData } from 'src/app/interfaces/route-data.interface';

import { CharSheetModel } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  title: string;
  formName: string;
  form: FormGroup;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.formName;

      this.form = new FormGroup({});
      const charSheetObject: CharSheetModel = this.personaService.currentPersona.sheet[this.formName];
      for (const key in charSheetObject) {
        if (key) {
          this.form.addControl(key, new FormControl(charSheetObject[key]));
        }
      }
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
