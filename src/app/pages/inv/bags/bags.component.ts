import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {
  @Input() targetForm: FormGroup;
  @Input() title: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.title = res.title;
    });
  }

  updateForm(): void {
    console.warn('target', this.targetForm.value);
  }

  addItem(array: string): void {
    (this.targetForm.get(array) as FormArray).push(new FormGroup({ name: new FormControl(), max: new FormControl() }));
  }

  removeItem(array: string, i: number): void {
    (this.targetForm.get(array) as FormArray).removeAt(i);
  }
}
