import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {
  weaponsForm: FormGroup;
  weaponsArray: Array<Object> = [
    { key: 'weapon1', label: 'arme principale' },
    { key: 'weapon2', label: 'arme secondaire' },
    { key: 'weapon3', label: 'arme supplémentaire' }
  ];
  constructor(private fb: FormBuilder, private notify: NotifierService) { }

  ngOnInit(): void {
    this.createForm();
    this.setData();
    this.notify.reset.subscribe((res) => {
      if (res) {
        this.createForm();
        this.notify.reset.next(false);
      }
    });
  }

  setData(): void {
    const data = JSON.parse(localStorage.getItem('weaponData'));
    if (data) {
      this.weaponsForm.patchValue(data);
      for (let weapon in data) {
        data[weapon].ef.forEach(effect => {
          (this.weaponsForm.get(weapon).get('ef') as FormArray).push(new FormControl(effect));
        });
      }
    }
  }

  createForm(): void {
    this.weaponsForm = this.fb.group({
      weapon1: this.fb.group({
        check: false,
        name: '',
        pi: '',
        rup: '',
        ef: this.fb.array([])
      }),
      weapon2: this.fb.group({
        check: false,
        name: '',
        pi: '',
        rup: '',
        ef: this.fb.array([])
      }),
      weapon3: this.fb.group({
        check: false,
        name: '',
        pi: '',
        rup: '',
        ef: this.fb.array([])
      })
    })
  }
  
  addWeapon(equiped?: boolean): void {
    localStorage.setItem('weaponData', JSON.stringify(this.weaponsForm.value));
    if (equiped) { this.notify.equiped.next(true); }
  }

  addEffect(weapon: string, effect: any, equiped?: boolean): void {
    if (effect.value !== '') {
      (this.weaponsForm.get(weapon).get('ef') as FormArray).push(this.fb.control(effect.value));
      localStorage.setItem('weaponData', JSON.stringify(this.weaponsForm.value));
      effect.value = '';
      if (equiped) { this.notify.equiped.next(true); }
    }
  }

  removeEffect(weapon: string, index: number, equiped?: boolean): void {
    (this.weaponsForm.get(weapon).get('ef') as FormArray).removeAt(index);
    localStorage.setItem('weaponData', JSON.stringify(this.weaponsForm.value));
    if (equiped) { this.notify.equiped.next(true); }
  }
}
