import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { EffectModel } from 'src/app/interfaces/persona.interface';
import { RouteData } from 'src/app/interfaces/route.interface';

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
  formName: string;
  form: FormArray;
  constructor(private route: ActivatedRoute, public personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.nameLabel = res.nameLabel;
      this.effectLabel = res.effectLabel;
      this.formName = res.formName;
      this.form = new FormArray([]);
      const sheetObject: EffectModel[] = this.personaService.currentPersona.sheet[this.formName];
      sheetObject.forEach(item => {
        this.form.push(new FormGroup({ name: new FormControl(item.name), effect: new FormControl(item.effect) }));
      });
    });
  }

  updateSheet() {
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem() {
    this.form.push(new FormGroup({ name: new FormControl(), effect: new FormControl() }));
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  deleteItem(i: number) {
    this.form.removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
