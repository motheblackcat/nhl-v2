import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';

import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  title: string;
  targetForm: FormGroup;
  matFormArray: FormArray;
  pTotal = 0;
  constructor(public fm: FormManagementService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.matFormArray = this.targetForm.get('mat') as FormArray;
    });
  }

  updateForm(): void {
    this.pTotal =
      this.targetForm.get('tente').get('wei').value +
      this.targetForm.get('matelas').get('wei').value +
      this.targetForm.get('couverture').get('wei').value +
      this.targetForm.get('mat').value.reduce((a, b) => a + b.wei, 0);
    // localStorage.setItem('mainForm', JSON.stringify(mainForm));
    console.warn(this.targetForm.value);
  }

  addItem(): void {
    (this.targetForm.get('mat') as FormArray).push(new FormGroup({ name: new FormControl(), wei: new FormControl() }));
    this.updateForm();
  }

  removeItem(i: number): void {
    (this.targetForm.get('mat') as FormArray).removeAt(i);
    this.updateForm();
  }
}
