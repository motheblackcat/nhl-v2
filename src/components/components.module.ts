import { NgModule } from '@angular/core';
import { WeaponComponent } from './weapon/weapon';
import { ArmorComponent } from './armor/armor';
import { LootComponent } from './loot/loot';
import { QuestComponent } from './quest/quest';
import { BagsComponent } from './bags/bags';
import { CampComponent } from './camp/camp';
import { FoodComponent } from './food/food';
import { GemsComponent } from './gems/gems';
import { PotionsComponent } from './potions/potions';
import { PreciousComponent } from './precious/precious';
import { SpecialComponent } from './special/special';
import { ResetModalComponent } from './reset-modal/reset-modal';
@NgModule({
	declarations: [WeaponComponent,
    ArmorComponent,
    LootComponent,
    QuestComponent,
    BagsComponent,
    CampComponent,
    FoodComponent,
    GemsComponent,
    PotionsComponent,
    PreciousComponent,
    SpecialComponent,
    ResetModalComponent],
	imports: [],
	exports: [WeaponComponent,
    ArmorComponent,
    LootComponent,
    QuestComponent,
    BagsComponent,
    CampComponent,
    FoodComponent,
    GemsComponent,
    PotionsComponent,
    PreciousComponent,
    SpecialComponent,
    ResetModalComponent]
})
export class ComponentsModule {}
