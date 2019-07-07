import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Storage } from '@ionic/storage';

import { mainForm } from 'src/app/models/form';
import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-list-multi',
  templateUrl: './list-multi.component.html',
  styleUrls: ['./list-multi.component.scss']
})
export class ListMultiComponent implements OnInit {
  title: string;
  subtitle: string;
  nameLabel: string;
  effectLabel: string;
  targetFormName: string;
  targetForm: FormArray;
  mainForm: FormGroup = mainForm;
  constructor(private route: ActivatedRoute, private store: Storage, private fm: FormManagementService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.nameLabel = res.nameLabel;
      this.effectLabel = res.effectLabel;
      this.targetFormName = res.targetForm;
      this.targetForm = mainForm.get(this.targetFormName) as FormArray;
    });
    // this.store.get('mainForm').then(data => {
    //   data[this.targetFormName].forEach(item => {
    //     this.targetForm.push(new FormGroup({ name: new FormControl(item.name), effect: new FormControl(item.effect) }));
    //   });
    // });
  }

  addItem(): void {
    this.targetForm.push(new FormGroup({ name: new FormControl(), effect: new FormControl() }));
  }

  deleteItem(i: number): void {
    this.targetForm.removeAt(i);
    this.fm.saveForm();
  }
}
