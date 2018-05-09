import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'bags',
  templateUrl: 'bags.html'
})
export class BagsComponent {
  bagsForm: FormGroup;
  sacs: FormArray;
  bourses: FormArray;

  constructor(private fb: FormBuilder, private dataStorage: DataProvider) {
    this.createForm();
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('bagsData'));
    if (data) {
      this.bagsForm.setValue(data);
    }
    this.dataStorage.clear.subscribe(() => {
      this.bagsForm.reset();
    });
  }

  createForm() {
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

  createArray(array: FormArray) {
    for (let i = 0; i < 5; i++) {
      array.push(this.fb.group({
        nom: '',
        chargemax: ''
      }));
    }
  }

  saveData() {
    this.dataStorage.storeData('bagsData', this.bagsForm.value);
  }
}
