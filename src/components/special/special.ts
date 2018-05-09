import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'special',
  templateUrl: 'special.html'
})
export class SpecialComponent {
  specialForm: FormArray;
  specials: Array<any> = [];

  constructor(private fb: FormBuilder, private dataStorage: DataProvider) {
    this.createForm();
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('specialsData'));
    if (data) {
      this.specialForm.setValue(data);
    }
    this.dataStorage.clear.subscribe(() => {
      this.specialForm.reset();
    });
  }

  createForm() {
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

  saveData() {
    this.dataStorage.storeData('specialsData', this.specialForm.value);
  }
}
