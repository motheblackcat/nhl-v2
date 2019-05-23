import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {
  armorsLabels = [ 'tête :', 'torse :', 'bouclier :', 'bras :', 'mains :', 'jambes :', 'pieds :'];
  armorsForm: FormArray;
  tdm = false;
  prNat = 0;
  prMag = 0;

  constructor(private fb: FormBuilder, private notify: NotifierService) {
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

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.armorsForm.reset();
        this.tdm = false;
        this.checkStats();
      }
    });
  }

  createForm() {
    this.armorsForm = this.fb.array([]);
    this.armorsLabels.forEach(() => {
      this.armorsForm.push(this.fb.group({
        name: '',
        pr: '',
        rup: '',
        equ: ''
      }));
    });
  }

  saveData() {
    localStorage.setItem('armorData', JSON.stringify(this.armorsForm.value));
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
