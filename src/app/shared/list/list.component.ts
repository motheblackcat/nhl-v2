import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from '../../models/form';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() placeholder: string;
  @Input() targetForm: FormArray;
  targetFormName: string;
  mainForm: FormGroup = mainForm;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.placeholder = res.placeholder;
      this.targetFormName = res.targetForm;
      this.targetForm = mainForm.get(this.targetFormName) as FormArray;
    });
  }

  updateForm(input: HTMLInputElement, i?: number): void {
    if (i !== undefined) {
      this.targetForm.setControl(i, new FormControl(input.value));
    } else {
      this.targetForm.push(new FormControl(input.value));
      input.value = '';
    }
    console.warn(this.targetForm);
  }

  deleteSkill(i: number): void {
    this.targetForm.removeAt(i);
    console.warn(this.targetForm);
  }
}
