import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';
import { charLabels } from 'src/app/models/labels';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  charForm: FormGroup;
  charControls = charLabels;
  constructor(private fb: FormBuilder, private notify: NotifierService) {}

  ngOnInit(): void {
    this.createForm();

    if (localStorage.getItem('charData')) {
      this.charForm.setValue(JSON.parse(localStorage.getItem('charData')));
    }

    this.notify.reset.subscribe(res => {
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
