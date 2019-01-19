import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-char',
  templateUrl: 'char.html',
})
export class CharPage {
  charForm: FormGroup;
  charControls: Array<Object> = [
    { label: 'Nom :', placeholder: 'Nom', control: 'name', type: 'text', order: '1' },
    { label: 'Origine :', placeholder: 'Origine', control: 'ori', type: 'text', order: '2' },
    { label: 'Métier(s) :', placeholder: 'Métiers', control: 'job', type: 'text', order: '3' },
    { label: 'Niveau :', placeholder: '0', control: 'niv', type: 'number', order: '5' },
    { label: 'Expérience (XP) :', placeholder: '0', control: 'xp', type: 'number', order: '6' },
    { label: 'Point de Destin :', placeholder: '0', control: 'dp', type: 'number', order: '7' },
    { label: 'Berylium :', placeholder: '0', control: 'ber', type: 'number', order: '9'},
    { label: 'Thritil :', placeholder: '0', control: 'thi', type: 'number', order: '10' },
    { label: 'Or :', placeholder: '0', control: 'gol', type: 'number', order: '11' },
    { label: 'Argent :', placeholder: '0', control: 'sil', type: 'number', order: '12' },
    { label: 'Cuivre :', placeholder: '0', control: 'cop', type: 'number', order: '13' }
  ];

  constructor(private fb: FormBuilder, private dataStorage: DataService) {
    this.createForm();
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('charData'));
    if (data) {
      this.charForm.setValue(data);
    }
    this.dataStorage.clear.subscribe(() => {
      this.charForm.reset();
    });
  }

  createForm() {
    this.charForm = this.fb.group({
      niv: '',
      xp: '',
      dp: '',
      name: '',
      ori: '',
      job: '',
      gen: '',
      ber: '',
      thi: '',
      gol: '',
      sil: '',
      cop: ''
    });
  }

  saveData() {
    this.dataStorage.storeData('charData', this.charForm.value);
  }

}
