import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-gems',
  templateUrl: './gems.component.html',
  styleUrls: ['./gems.component.scss']
})
export class GemsComponent implements OnInit {
  gemsForm: FormArray;
  gems: Array<any> = [];

  constructor(private fb: FormBuilder, private notify: NotifierService) {
    this.createForm();
  }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('gemsData'));
    if (data) {
      this.gemsForm.setValue(data);
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.gemsForm.reset();
        this.notify.reset.next(false);
      }
    });
  }

  // This part should not break backward compatibility (length set at 13)
  createForm(): void {
    for (let i = 0; i < 13; i++) {
      this.gems.push(this.gems.length);
    }
    this.gemsForm = this.fb.array([]);
    this.gems.forEach(() => {
      this.gemsForm.push(this.fb.group({
        nom: '',
        ug: ''
      }));
    });
  }

  saveData(): void {
    localStorage.setItem('gemsData', JSON.stringify(this.gemsForm.value));
  }
}
