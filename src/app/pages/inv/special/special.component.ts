import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  specialForm: FormArray;
  specials: Array<any> = [];

  constructor(private fb: FormBuilder, private notify: NotifierService) {
    this.createForm();
  }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('specialsData'));

    if (data) {
      this.specialForm.setValue(data);
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.specialForm.reset();
        this.notify.reset.next(false);
      }
    });
  }

  createForm(): void {
    for (let i = 0; i < 7; i++) {
      this.specials.push(this.specials.length);
    }
    this.specialForm = this.fb.array([]);
    this.specials.forEach(potion => {
      this.specialForm.push(this.fb.group({
        nom: '',
        effet: ''
      }));
    });
  }

  saveData(): void {
    localStorage.setItem('specialsData', JSON.stringify(this.specialForm.value));
  }
}
