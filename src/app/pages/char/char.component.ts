import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { PersonaService } from 'src/app/services/persona.service';

import { RouteData } from 'src/app/interfaces/route-data.interface';

import { charForm } from 'src/app/models/charform';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  charForm: FormGroup;
  title: string;
  formName: string;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.targetForm;
    });

    this.charForm = charForm;
    this.charForm.setValue(this.personaService.currentPersona.sheet[this.formName]);
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.charForm.value);
  }

  /** TODO: Move this to be global */
  defaultOrder(): number {
    return 0;
  }
}
