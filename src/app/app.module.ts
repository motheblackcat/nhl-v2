import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TabsComponent } from './shared/tabs/tabs.component';
import { ListComponent } from './shared/list/list.component';
import { ResetComponent } from './shared/reset/reset.component';

import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { EquipComponent } from './pages/equip/equip.component';
import { WeaponComponent } from './pages/equip/weapon/weapon.component';
import { ArmorComponent } from './pages/equip/armor/armor.component';
import { InvComponent } from './pages/inv/inv.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';
import { SpecialComponent } from './pages/inv/special/special.component';
import { GemsComponent } from './pages/inv/gems/gems.component';
import { PotionsComponent } from './pages/inv/potions/potions.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    CharComponent,
    StatsComponent,
    EquipComponent,
    InvComponent,
    ResetComponent,
    WeaponComponent,
    ArmorComponent,
    BagsComponent,
    CampComponent,
    SpecialComponent,
    GemsComponent,
    PotionsComponent
  ],
  entryComponents: [ResetComponent],
  imports: [BrowserModule, ReactiveFormsModule, FlexLayoutModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
