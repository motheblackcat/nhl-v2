import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {
  title: string;
  formName: string;
  targetForm: FormGroup;
  // bags: FormArray;
  // pooches: FormArray;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.formName = res.targetForm;
      const personaForm = this.personaService.currentPersona.sheet[this.formName];
      console.log(this.targetForm, personaForm);
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.targetForm.value);
  }

  addItem(array: string): void {
    (this.targetForm.get(array) as FormArray).push(new FormGroup({ name: new FormControl(), max: new FormControl() }));
    this.personaService.updatePersonas(this.formName, this.targetForm.value);
  }

  removeItem(array: string, i: number): void {
    const formArray = this.targetForm.get(array) as FormArray;
    if (formArray.length > 1) {
      formArray.removeAt(i);
      this.personaService.updatePersonas(this.formName, this.targetForm.value);
    }
  }
}
