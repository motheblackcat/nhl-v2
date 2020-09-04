import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html'
})
export class WeaponComponent implements OnInit {
  targetForm: FormGroup;
  title: string;
  constructor(private route: ActivatedRoute, personaService: PersonaService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
    });
  }

  addItem(control: string): void {
    (this.targetForm.get(control).get('ef') as FormArray).push(
      new FormGroup({
        name: new FormControl(),
        val: new FormControl()
      })
    );
  }

  removeItem(control: string, i: number): void {
    (this.targetForm.get(control).get('ef') as FormArray).removeAt(i);
    // this.personaService.saveForm();
  }
}
