import { STATS_NAMES } from 'src/app/consts/stats-names.const';
import { IEffect } from 'src/app/interfaces/effect.interface';
import { IPersonaSheet } from 'src/app/interfaces/persona.interface';
import { IStatSheet } from 'src/app/interfaces/statsheet.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  title: string = 'statistiques';
  formName: string = 'stats';
  form: UntypedFormGroup;
  magPhy = 0;
  magPsy = 0;
  resMag = 0;
  statsNames = STATS_NAMES;

  constructor(private route: ActivatedRoute, public personaService: PersonaService) { }

  ngOnInit() {
    this.form = new UntypedFormGroup({});
    const sheetObject: IStatSheet = this.personaService.currentPersona.sheets[this.formName];

    //TODO: Only add the MOD Control to the EV Formgroup to respect DRY
    for (const key in sheetObject) {
      if (key === 'ev') {
        this.form.addControl(key, new UntypedFormGroup({
          name: new UntypedFormControl(sheetObject[key]['name']),
          mod: new UntypedFormControl(sheetObject[key]['mod']),
          effect: new UntypedFormControl(Number(sheetObject[key]['effect']))
        }));
      } else {
        this.form.addControl(key, new UntypedFormGroup({
          name: new UntypedFormControl(sheetObject[key]['name']),
          effect: new UntypedFormControl(Number(sheetObject[key]['effect']))
        }));
      }
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
