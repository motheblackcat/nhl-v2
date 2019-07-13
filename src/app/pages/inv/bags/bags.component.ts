import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';
import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.scss']
})
export class BagsComponent implements OnInit {
  @Input() targetForm: FormGroup;
  @Input() title: string;
  bagsFormArray: FormArray;
  poochesFormArray: FormArray;
  constructor(private route: ActivatedRoute, private fm: FormManagementService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.title = res.title;
      this.bagsFormArray = this.targetForm.get('bags') as FormArray;
      this.poochesFormArray = this.targetForm.get('bags') as FormArray;
    });
  }

  addItem(array: string): void {
    (this.targetForm.get(array) as FormArray).push(new FormGroup({ name: new FormControl(), max: new FormControl() }));
  }

  removeItem(array: string, i: number): void {
    (this.targetForm.get(array) as FormArray).removeAt(i);
    this.fm.saveForm();
  }
}
