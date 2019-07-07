import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { mainForm } from '../models/form';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Injectable()
export class FormManagementService {
  resetArray = ['skillsForm', 'questForm', 'lootForm', 'foodForm', 'specialForm', 'gemsForm', 'potionsForm', 'preciousForm'];
  equipArray = ['weaponsForm', 'armorsForm'];
  constructor(private store: Storage) {}
  initForm(): void {
    this.store.get('mainForm').then(data => {
      if (data) {
        console.log('DATA', data);
        for (const control in mainForm.controls) {
          if (this.resetArray.includes(control)) {
            data[control].forEach(item => {
              (mainForm.get(control) as FormArray).push(new FormControl(item));
            });
          } else if (this.equipArray.includes(control)) {
          } else {
            mainForm.get(control).setValue(data[control]);
          }
        }
      }
    });
  }

  saveForm(): void {
    console.log('SAVED');
    this.store.set('mainForm', mainForm.value);
  }

  defaultOrder(): null {
    return null;
  }

  updateEffects(): void {
    const effects = [];
    ['armorsForm', 'weaponsForm'].forEach(formName => {
      const form = mainForm.get(formName) as FormGroup;
      for (const control in form.controls) {
        if (control !== 'tdm' && control !== 'prmag' && form.get(control).get('equ').value) {
          form
            .get(control)
            .get('ef')
            .value.forEach(e => {
              if (e['name'] && e['val']) {
                effects.push(e);
              }
            });
        }
      }
      ['ev', 'ea', 'cou', 'int', 'cha', 'ad', 'fo', 'atq', 'prd'].forEach(stat => {
        mainForm
          .get('statsForm')
          .get(stat)
          .get('ef')
          .setValue(effects.filter(e => e.name === stat).reduce((a, b) => a + Number(b.val), 0));
      });
    });
  }
}
