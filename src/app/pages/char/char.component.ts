import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  charForm: FormGroup;
  charControls: Array<Object> = [
    { label: 'nom :', placeholder: 'nom', control: 'name', type: 'text', order: '1' },
    { label: 'origine :', placeholder: 'origine', control: 'ori', type: 'text', order: '2' },
    { label: 'métier(s) :', placeholder: 'métiers', control: 'job', type: 'text', order: '3' },
    { label: 'niveau :', placeholder: '0', control: 'niv', type: 'number', order: '5' },
    { label: 'expérience (XP) :', placeholder: '0', control: 'xp', type: 'number', order: '6' },
    { label: 'point de destin :', placeholder: '0', control: 'dp', type: 'number', order: '7' },
    { label: "mes richesses à moi que j'ai :", placeholder: '', control: 'none', type: '', order: '8'},
    { label: 'berylium :', placeholder: '0', control: 'ber', type: 'number', order: '9'},
    { label: 'thritil :', placeholder: '0', control: 'thi', type: 'number', order: '10' },
    { label: 'or :', placeholder: '0', control: 'gol', type: 'number', order: '11' },
    { label: 'argent :', placeholder: '0', control: 'sil', type: 'number', order: '12' },
    { label: 'cuivre :', placeholder: '0', control: 'cop', type: 'number', order: '13' }
  ];
  constructor(private fb: FormBuilder, private notify: NotifierService) {}

  ngOnInit(): void {
    this.createForm();
    
    if (localStorage.getItem('charData')) {
      this.charForm.setValue(JSON.parse(localStorage.getItem('charData')));
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.charForm.reset();
        this.notify.reset.next(false);
      }
    });
  }

  createForm(): void {
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

  saveData(): void {
    localStorage.setItem('charData', JSON.stringify(this.charForm.value));
  }
}
