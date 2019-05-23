import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.scss']
})
export class PotionsComponent implements OnInit {
  potionsForm: FormArray;
  potions: Array<any> = [];

  constructor(private fb: FormBuilder, private notify: NotifierService) {
    this.createForm();
  }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('potionsData'));

    if (data) {
      this.potionsForm.setValue(data);
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.potionsForm.reset();
        this.notify.reset.next(false);
      }
    });
  }

  // Watch out for backward compatibility (length hard set)
  createForm(): void {
    for (let i = 0; i < 12; i++) {
      this.potions.push(this.potions.length);
    }
    this.potionsForm = this.fb.array([]);
    this.potions.forEach(potion => {
      this.potionsForm.push(this.fb.group({
        dose: '',
        effet: ''
      }));
    });
  }

  saveData(): void {
    localStorage.setItem('potionsData', JSON.stringify(this.potionsForm.value));
  }
}
