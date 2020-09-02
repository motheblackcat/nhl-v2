import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Storage } from '@ionic/storage';

import { FormManagementService } from 'src/app/services/form-management.service';

import { RouteData } from 'src/app/interfaces/route-data.interface';
import { charForm } from 'src/app/models/charform';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  charForm: FormGroup = charForm;
  title: string;
  /** TODO: This property could be in the component only instead of being taken from route data */
  targetForm: string;
  constructor(private route: ActivatedRoute, private store: Storage, public fm: FormManagementService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.targetForm = res.targetForm;
      this.store.get('mainForm').then(data => {
        if (data) {
          this.charForm.setValue(data.charForm);
        }
      });
    });
  }
}
