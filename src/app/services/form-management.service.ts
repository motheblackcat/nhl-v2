import { Injectable } from '@angular/core';

import { mainForm } from '../models/form';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormManagementService {
  initForm(): void {
    const data = window.localStorage.getItem('mainForm');
    if (data) {
      mainForm.setValue(JSON.parse(data));
    }
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
    console.log(mainForm.get('statsForm').value);
  }
}
