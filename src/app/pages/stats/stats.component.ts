import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { statsLabels, magLabels } from '../../models/labels';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  statsForm: FormGroup;
  statsLabels = statsLabels;
  magLabels = magLabels;

  constructor(private fb: FormBuilder, private notify: NotifierService) {}

  ngOnInit(): void {
    this.createForm();
    if (localStorage.getItem('statsData')) {
      this.statsForm.setValue(JSON.parse(localStorage.getItem('statsData')));
    }

    this.notify.equiped.subscribe(() => {
      this.checkEffects();
      this.checkStats();
    });

    this.notify.reset.subscribe(res => {
      if (res) {
        this.statsForm.reset();
        // Labels are not cleared on the first reset
        statsLabels.forEach(stat => {
          stat.effect = '';
        });
        this.checkStats();
        this.notify.reset.next(false);
      }
    });
  }

  createForm(): void {
    this.statsForm = this.fb.group({
      ev: 0,
      ea: 0,
      cou: 0,
      int: 0,
      cha: 0,
      ad: 0,
      fo: 0,
      atq: 0,
      prd: 0
    });
  }

  saveData(): void {
    this.checkEffects();
    this.checkStats();
    localStorage.setItem('statsData', JSON.stringify(this.statsForm.value));
  }

  checkStats(): void {
    let cou = this.statsForm.get('cou').value;
    let int = this.statsForm.get('int').value;
    let cha = this.statsForm.get('cha').value;
    let ad = this.statsForm.get('ad').value;
    let fo = this.statsForm.get('fo').value;

    const effects = statsLabels.filter(label => label.effect);
    effects.forEach(effect => {
      switch (effect.control) {
        case 'cou':
          cou = eval(cou + effect.effect);
          break;
        case 'int':
          int = eval(int + effect.effect);
          break;
        case 'cha':
          cha = eval(cha + effect.effect);
          break;
        case 'ad':
          ad = eval(ad + effect.effect);
          break;
        case 'fo':
          fo = eval(fo + effect.effect);
          break;
      }
    });

    magLabels.forEach(stat => {
      switch (stat.label) {
        case 'Magie Phy.':
          stat.value = Math.ceil((int + ad) / 2);
          break;
        case 'Magie Psy.':
          stat.value = Math.ceil((int + cha) / 2);
          break;
        case 'Résist. Mag.':
          stat.value = Math.ceil((int + cou + fo) / 3);
          break;
        default:
          break;
      }
    });
  }

  // Test code with a mix of multiple weapons / armors equipped
  checkEffects(): void {
    let weapons;
    const effectsArray = [];

    statsLabels.forEach(stat => {
      stat.effect = '';
    });

    if (localStorage.getItem('weaponData')) {
      weapons = (Object.values(
        JSON.parse(localStorage.getItem('weaponData'))
      ) as Array<any>).filter(weapon => weapon.equ);
    }

    if (weapons) {
      weapons.forEach(weapon => {
        weapon.ef.forEach(effect => {
          effectsArray.push({
            control: effect.split(' ')[0],
            val: `${effect.split(' ')[1]} ${effect.split(' ')[2]}`
          });
        });
      });

      for (const label of statsLabels) {
        for (const effect of effectsArray) {
          if (label.control.toUpperCase() === effect.control.toUpperCase()) {
            label.effect =
              label.effect === ''
                ? effect.val
                : eval(label.effect + effect.val);
          }
        }
      }
    }
  }
}
