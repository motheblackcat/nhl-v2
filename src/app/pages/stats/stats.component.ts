import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { StatsSheetModel } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  title: string;
  formName: string;
  form: FormGroup;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.formName = res.formName;

      this.form = new FormGroup({});
      const sheetObject: StatsSheetModel = this.personaService.currentPersona.sheet[this.formName];
      for (const key in sheetObject) {
        if (key === 'magphy' || key === 'magpsy' || key === 'resmag') {
          this.form.addControl(key, new FormControl(sheetObject[key]));
        } else {
          this.form.addControl(
            key,
            new FormGroup({ name: new FormControl(sheetObject[key]['name']), effect: new FormControl(Number(sheetObject[key]['effect'])) })
          );
        }
      }
      this.updateMagStats();
    });
  }

  updateMagStats() {
    const int = Number(this.form.get('int').get('name').value) + this.form.get('int').get('effect').value;
    const ad = Number(this.form.get('ad').get('name').value) + this.form.get('ad').get('effect').value;
    const cha = Number(this.form.get('cha').get('name').value) + this.form.get('cha').get('effect').value;
    const cou = Number(this.form.get('cou').get('name').value) + this.form.get('cou').get('effect').value;
    const fo = Number(this.form.get('fo').get('name').value) + this.form.get('fo').get('effect').value;

    this.form.get('magphy').setValue(Math.ceil((int + ad) / 2));
    this.form.get('magpsy').setValue(Math.ceil((int + cha) / 2));
    this.form.get('resmag').setValue(Math.ceil((cou + int + fo) / 3));

    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
