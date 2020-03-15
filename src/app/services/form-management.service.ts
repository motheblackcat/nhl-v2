import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { KeyValue } from '@angular/common';

import { Storage } from '@ionic/storage';

import { mainForm } from '../models/form';

@Injectable()
export class FormManagementService {
  resetArray = [
    'skillsForm',
    'questForm',
    'lootForm',
    'foodForm',
    'specialForm',
    'gemsForm',
    'potionsForm',
    'preciousForm'
  ];
  constructor(private store: Storage) {}

  initForm(): void {
    this.store.get('mainForm').then(storedForm => {
      if (storedForm) {
        // Load mono list
        this.resetArray.forEach(formName => {
          for (let i = 0; i < storedForm[formName].length; i++) {
            (mainForm.get(formName) as FormArray).push(
              new FormControl(storedForm[formName][i])
            );
          }
        });
        // Load weapons/armors
        ['weaponsForm', 'armorsForm'].forEach(form => {
          for (const control in (mainForm.get(form) as FormGroup).controls) {
            if (
              mainForm
                .get(form)
                .get(control)
                .get('ef')
            ) {
              (mainForm
                .get(form)
                .get(control)
                .get('ef') as FormArray).clear();
              for (let i = 0; i < storedForm[form][control].ef.length; i++) {
                (mainForm
                  .get(form)
                  .get(control)
                  .get('ef') as FormArray).push(
                  new FormGroup({
                    name: new FormControl(storedForm[form][control].ef[i].name),
                    val: new FormControl(storedForm[form][control].ef[i].val)
                  })
                );
              }
            }
          }
        });
        // Load camps
        (mainForm.get('campForm').get('mat') as FormArray).clear();
        for (let i = 0; i < storedForm['campForm'].mat.length; i++) {
          (mainForm.get('campForm').get('mat') as FormArray).push(
            new FormGroup({
              name: new FormControl(storedForm['campForm']['mat'][i].name),
              wei: new FormControl(storedForm['campForm']['mat'][i].wei)
            })
          );
        }
        // Load bags
        ['bags', 'pooches'].forEach(form => {
          (mainForm.get('bagsForm').get(form) as FormArray).clear();
          for (let i = 0; i < storedForm['bagsForm'][form].length; i++) {
            (mainForm.get('bagsForm').get(form) as FormArray).push(
              new FormGroup({
                name: new FormControl(storedForm['bagsForm'][form][i].name),
                max: new FormControl(storedForm['bagsForm'][form][i].max)
              })
            );
          }
        });
        // Load multi list
        ['potionsForm', 'specialForm', 'gemsForm'].forEach(formName => {
          (mainForm.get(formName) as FormArray).clear();
          for (let i = 0; i < storedForm[formName].length; i++) {
            (mainForm.get(formName) as FormArray).push(
              new FormGroup({
                name: new FormControl(storedForm[formName][i].name),
                effect: new FormControl(storedForm[formName][i].effect)
              })
            );
          }
        });
        // Load the rest
        mainForm.setValue(storedForm);
      }
    });
    this.updateEffects();
  }

  saveForm(): void {
    this.updateEffects();
    this.store.set('mainForm', mainForm.value);
  }

  updateEffects(): void {
    const effects = [];
    ['armorsForm', 'weaponsForm'].forEach(formName => {
      const form = mainForm.get(formName) as FormGroup;
      for (const control in form.controls) {
        if (
          control !== 'tdm' &&
          control !== 'prmag' &&
          form.get(control).get('equ').value
        ) {
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
    });

    ['ev', 'ea', 'cou', 'int', 'cha', 'ad', 'fo', 'atq', 'prd'].forEach(
      stat => {
        mainForm
          .get('statsForm')
          .get(stat)
          .get('ef')
          .setValue(
            effects
              .filter(e => e.name.toLowerCase() === stat)
              .reduce((a, b) => a + Number(b.val), 0)
          );
      }
    );
  }

  reset(): void {
    this.resetArray.forEach(form => (mainForm.get(form) as FormArray).clear());
    for (const control in (mainForm.get('weaponsForm') as FormGroup).controls) {
      if (control) {
        const effectForm = mainForm
          .get('weaponsForm')
          .get(control)
          .get('ef') as FormArray;
        effectForm.clear();
        effectForm.push(
          new FormGroup({
            name: new FormControl(),
            val: new FormControl()
          })
        );
      }
    }
    for (const control in (mainForm.get('armorsForm') as FormGroup).controls) {
      if (
        mainForm
          .get('armorsForm')
          .get(control)
          .get('ef')
      ) {
        const effectForm = mainForm
          .get('armorsForm')
          .get(control)
          .get('ef') as FormArray;
        effectForm.clear();
        effectForm.push(
          new FormGroup({
            name: new FormControl(),
            val: new FormControl()
          })
        );
      }
    }
    (mainForm.get('bagsForm').get('bags') as FormArray).clear();
    (mainForm.get('bagsForm').get('pooches') as FormArray).clear();
    (mainForm.get('campForm').get('mat') as FormArray).clear();
    mainForm.reset();
    this.store.clear();
  }

  defaultOrder(): number {
    return 0;
  }
}
