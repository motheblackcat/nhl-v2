import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  targetForm: FormGroup;
  title: string;
  formName: string;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.formName = res.targetForm;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
      this.targetForm.setValue(this.personaService.currentPersona.sheet[this.formName]);
      this.updateMagStats();
    });
  }

  updateMagStats() {
    const int = this.targetForm.get('int').get('val').value + this.targetForm.get('int').get('ef').value;
    const ad = this.targetForm.get('ad').get('val').value + this.targetForm.get('ad').get('ef').value;
    const cha = this.targetForm.get('cha').get('val').value + this.targetForm.get('cha').get('ef').value;
    const cou = this.targetForm.get('cou').get('val').value + this.targetForm.get('cou').get('ef').value;
    const fo = this.targetForm.get('fo').get('val').value + this.targetForm.get('fo').get('ef').value;

    this.targetForm.get('magphy').setValue(Math.ceil((int + ad) / 2));
    this.targetForm.get('magpsy').setValue(Math.ceil((int + cha) / 2));
    this.targetForm.get('resmag').setValue(Math.ceil((cou + int + fo) / 3));

    this.personaService.updatePersonas(this.formName, this.targetForm.value);
  }
}
