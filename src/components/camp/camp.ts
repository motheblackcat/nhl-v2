import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'camp',
  templateUrl: 'camp.html'
})
export class CampComponent {
  campForm: FormGroup;
  material: FormArray;
  list: FormArray;
  labels = ['Tente', 'Matelas', 'Couverture'];
  total = 0;

  constructor(private fb: FormBuilder, private dataStorage: DataProvider) {
    this.createForm();
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('campData'));
    if (data) {
      this.campForm.setValue(data);
      this.calculTotal();
    }
    this.dataStorage.clear.subscribe(() => {
      this.campForm.reset();
    });
  }

  createForm() {
    this.campForm = this.fb.group({
      material: this.fb.array([]),
      list: this.fb.array([])
    });
    this.material = this.campForm.get('material') as FormArray;
    this.list = this.campForm.get('list') as FormArray;
    this.createMaterialArray();
    this.createListArray();
  }

  createMaterialArray() {
    for (let i = 0; i < 3; i++) {
      this.material.push(this.fb.group({
        name: '',
        pv: '',
        hour: '',
        weight: ''
      }));
    }
  }

  createListArray() {
    for (let i = 0; i < 4; i++) {
      this.list.push(this.fb.group({
        name: '',
        weight: ''
      }));
    }
  }

  calculTotal() {
    this.material.value.forEach(el => {
      this.total += Number(el.weight);
    });
    this.list.value.forEach(el => {
      this.total += Number(el.weight);
    });
  }

  saveData() {
    this.total = 0;
    this.calculTotal();
    this.dataStorage.storeData('campData', this.campForm.value);
  }
}
