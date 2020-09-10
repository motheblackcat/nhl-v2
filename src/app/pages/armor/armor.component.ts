import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { RouteData } from 'src/app/interfaces/route.interface';
import { ArmorSheet } from 'src/app/models/persona.model';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html'
})
export class ArmorComponent implements OnInit {
  title: string;
  formName: string;
  form: FormGroup;
  prNat: number;
  prMag: number;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit(): void {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.formName;
      this.form = new FormGroup({});
      const sheetObject: ArmorSheet = this.personaService.currentPersona.sheet[this.formName];
    });
    this.updateForm();
  }

  updateForm(): void {
    this.prNatSum();
    // this.personaService.updateEffects();
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  prNatSum() {
    this.prNat = 0;
    for (const control in this.form.controls) {
      if (control !== 'tdm' && control !== 'prmag' && this.form.get(control).get('pr').value) {
        if (this.form.get(control).get('equ').value) {
          this.prNat += Number(this.form.get(control).get('pr').value);
        }
      }
    }
    this.prNat = this.form.get('tdm').value ? this.prNat + 1 : this.prNat;
  }

  addItem(control: string): void {
    (this.form.get(control).get('ef') as FormArray).push(
      new FormGroup({
        name: new FormControl(),
        val: new FormControl()
      })
    );
    this.updateForm();
  }

  removeItem(control: string, i: number): void {
    (this.form.get(control).get('ef') as FormArray).removeAt(i);
    this.updateForm();
  }
}
