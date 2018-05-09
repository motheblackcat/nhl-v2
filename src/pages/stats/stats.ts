import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  statsForm: FormGroup;
  labels: Array<Object> = [
    { control: 'ev', label: 'Energie Vitale (EV-PV)', placeholder: '0' },
    { control: 'ea', label: 'Energie Astrale (EA-PA)', placeholder: '0' },
    { control: 'cou', label: 'Courage (COU)', placeholder: '0' },
    { control: 'int', label: 'Intelligence (INT)', placeholder: '0' },
    { control: 'cha', label: 'Charisme (CHA)', placeholder: '0' },
    { control: 'ad', label: 'Adresse (AD)', placeholder: '0' },
    { control: 'fo', label: 'Force (FO)', placeholder: '0' },
    { control: 'atk', label: 'ATTAQUE', placeholder: '0' },
    { control: 'prd', label: 'PARADE', placeholder: '0' }
  ];
  magLabels: Array<Object> = [
    { control: 'magphy', label: 'Magie Phy.', hint: 'Moyenne INT et AD' },
    { control: 'magpsy', label: 'Magie Psy.', hint: 'Moyenne INT et CHA' },
    { control: 'magres', label: 'Résist. Mag.', hint: 'Moyenne COU, INT et FO' }
  ];

  constructor(private dataStorage: DataProvider, private fb: FormBuilder) {
    this.createForm();
  }
  
  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('statsData'));
    if (data) {
      this.statsForm.setValue(data);
    }
    this.checkStats();
    this.dataStorage.clear.subscribe(() => {
      this.statsForm.reset();
    });
  }

  createForm() {
    this.statsForm = this.fb.group({
      ev: '',
      ea: '',
      cou: '',
      int: '',
      cha: '',
      ad: '',
      fo: '',
      atk: '',
      prd: '',
      magphy: 0,
      magpsy: 0,
      magres: 0
    });
  }

  saveData() {
    this.checkStats();
    this.dataStorage.storeData('statsData', this.statsForm.value);
  }

  checkStats() {
    this.statsForm.get('magphy').setValue(Math.ceil((this.statsForm.get('int').value + this.statsForm.get('ad').value) / 2));
    this.statsForm.get('magpsy').setValue(Math.ceil((this.statsForm.get('int').value + this.statsForm.get('cha').value) / 2));
    this.statsForm.get('magres').setValue(Math.ceil((this.statsForm.get('int').value + this.statsForm.get('fo').value + this.statsForm.get('cou').value) / 3));
  }
}
