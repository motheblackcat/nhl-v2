import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { RouteData } from 'src/app/interfaces/route.interface';
import { EffectModel, PersonaSheetModel, StatsSheetModel } from 'src/app/interfaces/persona.interface';

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
    this.route.data.subscribe((res: RouteData) => {
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
    this.updateEffects();
    const sheetObject: StatsSheetModel = this.personaService.currentPersona.sheet[this.formName];
    const int = Number(sheetObject.int.name + sheetObject.int.effect);
    const ad = Number(sheetObject.ad.name + sheetObject.ad.effect);
    const cha = Number(sheetObject.cha.name + sheetObject.cha.effect);
    const cou = Number(sheetObject.cou.name + sheetObject.cou.effect);
    const fo = Number(sheetObject.fo.name + sheetObject.fo.effect);
    this.form.get('magphy').setValue(Math.ceil((int + ad) / 2));
    this.form.get('magpsy').setValue(Math.ceil((int + cha) / 2));
    this.form.get('resmag').setValue(Math.ceil((cou + int + fo) / 3));
    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  updateEffects() {
    const sheetObject: PersonaSheetModel = this.personaService.currentPersona.sheet;
    const weaponsEffects = sheetObject.weapons.filter(weapon => weapon.effects.length > 0 && weapon.equiped).map(weapon => weapon.effects);
    const armorsEffects = sheetObject.armors.list.filter(armor => armor.effects.length > 0 && armor.equiped).map(armor => armor.effects);
    const effects: EffectModel[] = [].concat(...weaponsEffects, ...armorsEffects);
    ['ev', 'ea', 'cou', 'int', 'cha', 'ad', 'fo', 'atq', 'prd'].forEach(stat => {
      this.form
        .get(stat)
        .get('effect')
        .setValue(effects.filter(e => e.name === stat).reduce((a, b) => a + Number(b.effect), 0));
    });
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
