import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from '../../models/form';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: string;
  subtitle: string;
  placeholder: string;
  targetFormName: string;
  targetForm: FormArray;
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

  updateForm(input: HTMLInputElement): void {
    this.targetForm.push(new FormControl(input.value));
    input.value = '';
  }

  deleteItem(i: number): void {
    this.targetForm.removeAt(i);
  }
}
