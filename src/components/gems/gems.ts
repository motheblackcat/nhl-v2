import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'gems',
  templateUrl: 'gems.html'
})
export class GemsComponent {
  gemsForm: FormArray;
  gems: Array<any> = [];

  constructor(private fb: FormBuilder, private dataStorage: DataProvider) {
    this.createForm();
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('gemsData'));
    if (data) {
      this.gemsForm.setValue(data);
    }
    this.dataStorage.clear.subscribe(() => {
      this.gemsForm.reset();
    });
  }

  createForm() {
    for (let i = 0; i < 13; i++) {
      this.gems.push(this.gems.length);
    }
    this.gemsForm = this.fb.array([]);
    this.gems.forEach(potion => {
      this.gemsForm.push(this.fb.group({
        nom: '',
        ug: ''
      }));
    });
  }

  saveData() {
    this.dataStorage.storeData('gemsData', this.gemsForm.value);
  }
}
