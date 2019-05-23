import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  campForm: FormGroup;
  material: FormArray;
  list: FormArray;
  labels = ['Tente', 'Matelas', 'Couverture'];
  total = 0;

  constructor(private fb: FormBuilder, private notify: NotifierService) {
    this.createForm();
  }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('campData'));

    if (data) {
      this.campForm.setValue(data);
      this.calculTotal();
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.campForm.reset();
        this.notify.reset.next(false);
      }
    });
  }

  createForm(): void {
    this.campForm = this.fb.group({
      material: this.fb.array([]),
      list: this.fb.array([])
    });
    this.material = this.campForm.get('material') as FormArray;
    this.list = this.campForm.get('list') as FormArray;
    this.createMaterialArray();
    this.createListArray();
  }

  createMaterialArray(): void {
    for (let i = 0; i < 3; i++) {
      this.material.push(this.fb.group({
        name: '',
        pv: '',
        hour: '',
        weight: ''
      }));
    }
  }

  createListArray(): void {
    for (let i = 0; i < 4; i++) {
      this.list.push(this.fb.group({
        name: '',
        weight: ''
      }));
    }
  }

  calculTotal(): void {
    this.material.value.forEach(el => {
      this.total += Number(el.weight);
    });
    this.list.value.forEach(el => {
      this.total += Number(el.weight);
    });
  }

  saveData(): void {
    this.total = 0;
    this.calculTotal();
    localStorage.setItem('campData', JSON.stringify(this.campForm.value));
  }
}
