import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Storage } from '@ionic/storage';

import { mainForm } from '../../models/form';
import { FormManagementService } from 'src/app/services/form-management.service';

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
  constructor(private route: ActivatedRoute, private store: Storage, private fm: FormManagementService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.placeholder = res.placeholder;
      this.targetFormName = res.targetForm;
      this.targetForm = mainForm.get(this.targetFormName) as FormArray;
      this.store.get('mainForm').then(data => {
        data[this.targetFormName].forEach(item => {
          this.targetForm.push(new FormControl(item));
        });
      });
    });
  }

  updateItem(item, i) {
    if (i === undefined) {
      this.targetForm.push(new FormControl(item.value));
      item.value = '';
    } else {
      this.fm.saveForm();
    }
  }

  deleteItem(i: number): void {
    this.targetForm.removeAt(i);
    this.fm.saveForm();
  }
}
