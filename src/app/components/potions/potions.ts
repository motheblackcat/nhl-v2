import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'potions',
  templateUrl: 'potions.html'
})
export class PotionsComponent {
  potionsForm: FormArray;
  potions: Array<any> = [];

  constructor(private fb: FormBuilder, private dataStorage: DataService) {
    this.createForm();
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('potionsData'));
    if (data) {
      this.potionsForm.setValue(data);
    }
    this.dataStorage.clear.subscribe(() => {
      this.potionsForm.reset();
    });
  }

  createForm() {
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

  saveData() {
    this.dataStorage.storeData('potionsData', this.potionsForm.value);
  }
}
