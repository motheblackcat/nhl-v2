import { STATS_NAMES } from 'src/app/enums/stats.enum';
import { IEffect } from 'src/app/interfaces/effect.interface';
import { IPersonaSheet } from 'src/app/interfaces/persona.interface';
import { IStatSheet } from 'src/app/interfaces/statsheet.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  title: string = 'statistiques';
  formName: string = 'stats';
  form: FormGroup;
  magPhy = 0;
  magPsy = 0;
  resMag = 0;
  statsNames = [STATS_NAMES.EV, STATS_NAMES.EA, STATS_NAMES.COU, STATS_NAMES.INT, STATS_NAMES.CHA, STATS_NAMES.AD, STATS_NAMES.FO, STATS_NAMES.ATQ, STATS_NAMES.PRD];

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit() {
    this.form = new FormGroup({});
    const sheetObject: IStatSheet = this.personaService.currentPersona.sheets[this.formName];

    /** Note: Removed unused props from old data format - could be readded for text export */
    delete sheetObject['magphy'];
    delete sheetObject['magpsy'];
    delete sheetObject['resmag'];

    for (const key in sheetObject) {
      this.form.addControl(key, new FormGroup({
        name: new FormControl(sheetObject[key]['name']),
        effect: new FormControl(Number(sheetObject[key]['effect']))
      }));
    }

    this.route.data.subscribe(() => {
      this.updateMagStats();
      this.updateEffects();
    })
  }

  getEffectColor(value: number): string {
    switch (Math.sign(value)) {
      case 1:
        return 'success';

      case -1:
        return 'danger';

      default:
        return 'medium'
    }
  }

  getEffectValue(control: string): number {
    return this.form.get(control).get('effect').value
  }

  updateMagStats() {
    const sheetObject: IStatSheet = this.personaService.currentPersona.sheets[this.formName];
    const int = Number(sheetObject.int.name + sheetObject.int.effect);
    const ad = Number(sheetObject.ad.name + sheetObject.ad.effect);
    const cha = Number(sheetObject.cha.name + sheetObject.cha.effect);
    const cou = Number(sheetObject.cou.name + sheetObject.cou.effect);
    const fo = Number(sheetObject.fo.name + sheetObject.fo.effect);

    this.magPhy = Math.ceil((int + ad) / 2);
    this.magPsy = Math.ceil((int + cha) / 2);
    this.resMag = Math.ceil((cou + int + fo) / 3);

    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  updateEffects() {
    const sheetObject: IPersonaSheet = this.personaService.currentPersona.sheets;
    const weaponsEffects = sheetObject.weapons.filter(weapon => weapon.equiped).map(weapon => weapon.effects);
    const armorsEffects = sheetObject.armors.list.filter(armor => armor.equiped).map(armor => armor.effects);
    const effects: IEffect[] = [].concat(...weaponsEffects, ...armorsEffects);

    Object.keys(this.form.controls).forEach(stat => {
      this.form
        .get(stat)
        .get('effect')
        .setValue(effects.filter(e => e.name === stat).reduce((a, b) => a + Number(b.effect), 0));
    });

    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
