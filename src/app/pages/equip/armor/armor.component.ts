import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';
import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {
  targetForm: FormGroup;
  title: string;
  prNat = 0;
  prMag = 0;
  constructor(private route: ActivatedRoute, public fm: FormManagementService) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
    });
    this.prNatSum();
  }

  updateForm(): void {
    this.prNatSum();
    this.fm.updateEffects();
  }

  prNatSum() {
    this.prNat = 0;
    for (const control in this.targetForm.controls) {
      if (control !== 'tdm' && control !== 'prmag') {
        this.prNat += this.targetForm.get(control).get('pr').value ? Number(this.targetForm.get(control).get('pr').value) : 0;
      }
    }
    this.prNat = this.targetForm.get('tdm').value ? this.prNat + 1 : this.prNat;
  }

  addItem(control: string): void {
    (this.targetForm.get(control).get('ef') as FormArray).push(
      new FormGroup({
        name: new FormControl(),
        val: new FormControl()
      })
    );
    this.updateForm();
  }

  removeItem(control: string, i: number): void {
    (this.targetForm.get(control).get('ef') as FormArray).removeAt(i);
    this.updateForm();
    this.fm.saveForm();
  }
}
