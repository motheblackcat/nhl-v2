import { Component } from '@angular/core';
import { WeaponComponent } from '../../components/weapon/weapon';
import { ArmorComponent } from '../../components/armor/armor';

@Component({
  selector: 'page-equip',
  templateUrl: 'equip.html',
})
export class EquipPage {
  rootPage = WeaponComponent;
  rootPage2 = ArmorComponent;
  constructor() {}
}
