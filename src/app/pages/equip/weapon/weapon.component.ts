import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';
import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {
  targetForm: FormGroup;
  title: string;
  constructor(private route: ActivatedRoute, public fm: FormManagementService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
    });
  }

  updateForm(): void {
    let adcounter = 0;
    let intcounter = 0;
    for (const control in this.targetForm.controls) {
      if (this.targetForm.get(control).get('equ').value) {
        this.targetForm
          .get(control)
          .get('ef')
          .value.forEach(effect => {
            if (effect.split(' ')[0] === 'ad') {
              adcounter += Number(effect.split(' ')[2]);
            }
            if (effect.split(' ')[0] === 'int') {
              intcounter += Number(effect.split(' ')[2]);
            }
          });
      }
    }
    console.log(adcounter, intcounter);
    console.log(this.targetForm.value);
  }

  addItem(control: string): void {
    (this.targetForm.get(control).get('ef') as FormArray).push(new FormControl());
    this.updateForm();
  }

  removeItem(control: string, i: number): void {
    (this.targetForm.get(control).get('ef') as FormArray).removeAt(i);
    this.updateForm();
  }
}
