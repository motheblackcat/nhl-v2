import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Storage } from '@ionic/storage';

import { mainForm } from 'src/app/models/form';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  title: string;
  targetForm: FormGroup;
  matFormArray: FormArray;
  pTotal = 0;
  constructor(personaService: PersonaService, private route: ActivatedRoute, private store: Storage) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.matFormArray = this.targetForm.get('mat') as FormArray;
    });
    this.targetForm.valueChanges.subscribe(res => {
      this.updateTotalWeight();
    });
  }

  updateTotalWeight(): void {
    this.pTotal =
      this.targetForm.get('tente').get('wei').value +
      this.targetForm.get('matelas').get('wei').value +
      this.targetForm.get('couverture').get('wei').value +
      this.targetForm.get('mat').value.reduce((a, b) => a + b.wei, 0);
  }

  addItem(): void {
    (this.targetForm.get('mat') as FormArray).push(new FormGroup({ name: new FormControl(), wei: new FormControl() }));
  }

  removeItem(i: number): void {
    (this.targetForm.get('mat') as FormArray).removeAt(i);
    // this.personaService.saveForm();
  }
}
