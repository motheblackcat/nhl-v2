import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CharPage } from '../pages/char/char';
import { StatsPage } from '../pages/stats/stats';
import { DataProvider } from '../providers/data/data';
import { SkillsPage } from '../pages/skills/skills';
import { EquipPage } from '../pages/equip/equip';
import { WeaponComponent } from '../components/weapon/weapon';
import { ArmorComponent } from '../components/armor/armor';
import { InvPage } from '../pages/inv/inv';
import { LootComponent } from '../components/loot/loot';
import { QuestComponent } from '../components/quest/quest';
import { BagsComponent } from '../components/bags/bags';
import { CampComponent } from '../components/camp/camp';
import { FoodComponent } from '../components/food/food';
import { GemsComponent } from '../components/gems/gems';
import { PotionsComponent } from '../components/potions/potions';
import { PreciousComponent } from '../components/precious/precious';
import { SpecialComponent } from '../components/special/special';
import { ResetPage } from '../pages/reset/reset';
import { ResetModalComponent } from '../components/reset-modal/reset-modal';

import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CharPage,
    StatsPage,
    SkillsPage,
    EquipPage,
    InvPage,
    ResetPage,
    ArmorComponent,
    BagsComponent,
    CampComponent,
    FoodComponent,
    GemsComponent,
    LootComponent,
    PotionsComponent,
    PreciousComponent,
    QuestComponent,
    SpecialComponent,
    WeaponComponent,
    ResetModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CharPage,
    StatsPage,
    SkillsPage,
    EquipPage,
    InvPage,
    ResetPage,
    ArmorComponent,
    BagsComponent,
    CampComponent,
    FoodComponent,
    GemsComponent,
    LootComponent,
    PotionsComponent,
    PreciousComponent,
    QuestComponent,
    SpecialComponent,
    WeaponComponent,
    ResetModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Vibration
  ]
})
export class AppModule {}
