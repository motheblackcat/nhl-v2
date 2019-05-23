import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {
  bagsForm: FormGroup;
  sacs: FormArray;
  bourses: FormArray;

  constructor(private fb: FormBuilder, private notify: NotifierService) { }

  ngOnInit(): void {
    this.createForm();
    const data = JSON.parse(localStorage.getItem('bagsData'));

    if (data) {
      this.bagsForm.setValue(data);
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.bagsForm.reset();
        this.notify.reset.next(false);
      }
    });
  }

  createForm(): void {
    this.bagsForm = this.fb.group({
      poidsmax: '',
      sacs: this.fb.array([]),
      bourses: this.fb.array([])
    });
    this.sacs = this.bagsForm.get('sacs') as FormArray;
    this.bourses = this.bagsForm.get('bourses') as FormArray;
    this.createArray(this.sacs);
    this.createArray(this.bourses);
  }

  createArray(array: FormArray): void {
    for (let i = 0; i < 5; i++) {
      array.push(this.fb.group({
        nom: '',
        chargemax: ''
      }));
    }
  }

  saveData(): void {
    localStorage.setItem('bagsData', JSON.stringify(this.bagsForm.value));
  }
}
