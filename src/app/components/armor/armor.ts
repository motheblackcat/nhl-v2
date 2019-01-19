import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'armor',
  templateUrl: 'armor.html'
})
export class ArmorComponent {
  armorsLabels = [ 'tête :', 'torse :', 'bouclier :', 'bras :', 'mains :', 'jambes :', 'pieds :'];
  armorsForm: FormArray;
  tdm = false;
  prNat = 0;
  prMag = 0;

  constructor(private fb: FormBuilder, private dataStorage: DataService) {
    this.createForm();
  }
  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('armorData'));
    if (data) {
      this.armorsForm.setValue(data);
    }
    if (localStorage.getItem('tdmData')) {
      this.tdm = JSON.parse(localStorage.getItem('tdmData'));
    }
    this.checkStats();
    this.dataStorage.clear.subscribe(() => {
      this.armorsForm.reset();
      this.tdm = false;
      this.checkStats();
    });
  }

  createForm() {
    this.armorsForm = this.fb.array([]);
    this.armorsLabels.forEach(label => {
      this.armorsForm.push(this.fb.group({
        name: '',
        pr: '',
        rup: ''
      }));
    });
  }

  saveData() {
    this.dataStorage.storeData('armorData', this.armorsForm.value);
    this.checkStats();
  }

  toggleTdm() {
    this.tdm = !this.tdm;
    localStorage.setItem('tdmData', String(this.tdm));
    this.checkStats();
  }

  checkStats() {
    let sum = 0;
    for (let i = 0; i < this.armorsForm.length; i++) {
      const pr = Number(this.armorsForm.get(i.toString()).get('pr').value);
      sum += pr;
      this.prNat = sum;
    }
    if (this.tdm) {
      this.prNat = sum + 1;
    } else {
      this.prNat = sum;
    }
  }
}
