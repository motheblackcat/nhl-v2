import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { PersonaService } from 'src/app/services/persona.service';

import { RouteData } from 'src/app/interfaces/route-data.interface';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  title: string;
  formName: string;
  targetForm: FormGroup;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.targetForm;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.targetForm.setValue(this.personaService.currentPersona.sheet[this.formName]);
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.targetForm.value);
  }
}
