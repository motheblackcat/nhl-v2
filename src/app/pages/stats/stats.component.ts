import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';
import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  targetForm: FormGroup;
  title: string;
  constructor(private route: ActivatedRoute, public fm: FormManagementService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.title = res.title;
    });
  }

  updateForm(): void {
    const int = this.targetForm.get('int').value;
    const ad = this.targetForm.get('ad').value;
    const cha = this.targetForm.get('cha').value;
    const cou = this.targetForm.get('cou').value;
    const fo = this.targetForm.get('fo').value;

    this.targetForm.get('magphy').setValue(Math.ceil((int + ad) / 2));
    this.targetForm.get('magpsy').setValue(Math.ceil((int + cha) / 2));
    this.targetForm.get('resmag').setValue(Math.ceil((cou + int + fo) / 3));
    console.warn(this.targetForm.value);
  }
}
