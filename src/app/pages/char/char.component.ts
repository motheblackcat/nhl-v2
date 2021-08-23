import { CharSheetModel } from 'src/app/interfaces/persona.interface';
import { RouteData } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  title: string;
  formName: string;
  form: FormGroup;
  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.formName;

      this.form = new FormGroup({});
      const sheetObject: CharSheetModel = this.personaService.currentPersona.sheets[this.formName];
      for (const key in sheetObject) {
        if (key) {
          this.form.addControl(key, new FormControl(sheetObject[key]));
        }
      }
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
