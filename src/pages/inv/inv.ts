import { Component } from '@angular/core';
import { LootComponent } from '../../components/loot/loot';
import { QuestComponent } from '../../components/quest/quest';
import { BagsComponent } from '../../components/bags/bags';
import { CampComponent } from '../../components/camp/camp';
import { FoodComponent } from '../../components/food/food';
import { GemsComponent } from '../../components/gems/gems';
import { PotionsComponent } from '../../components/potions/potions';
import { PreciousComponent } from '../../components/precious/precious';
import { SpecialComponent } from '../../components/special/special';

@Component({
  selector: 'page-inv',
  templateUrl: 'inv.html',
})
export class InvPage {
  bags = BagsComponent;
  camp = CampComponent;
  food = FoodComponent;
  gems = GemsComponent;
  loot = LootComponent;
  potions = PotionsComponent;
  precious = PreciousComponent;
  quest = QuestComponent;
  special = SpecialComponent;

  constructor() {}
}
