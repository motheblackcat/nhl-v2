import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'weapon',
  templateUrl: 'weapon.html'
})
export class WeaponComponent {
  weaponsForm: FormGroup;
  
  constructor(private dataStorage: DataService, private fb: FormBuilder) {
    this.dataStorage = dataStorage;
    this.createForm();
  }

   ngOnInit() {
    const data = JSON.parse(localStorage.getItem('weaponData'));
    if (data !== null) {
      this.weaponsForm.setValue(data);
    }
    this.dataStorage.clear.subscribe(() => {
      this.weaponsForm.reset();
    });
  }

  addWeapon() {
    this.dataStorage.storeData('weaponData', this.weaponsForm.value);
  }

  // Could be refactored
  createForm() {
    this.weaponsForm = this.fb.group({
      weapon1: this.fb.group({
        name: '',
        pi: '',
        rup: ''
      }),
      weapon2: this.fb.group({
        name: '',
        pi: '',
        rup: ''
      }),
      weapon3: this.fb.group({
        name: '',
        pi: '',
        rup: ''
      })
    });
  }
}
