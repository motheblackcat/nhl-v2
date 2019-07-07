import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ListComponent } from './shared/list/list.component';
import { ListMultiComponent } from './shared/list-multi/list-multi.component';
import { ResetComponent } from './shared/reset/reset.component';

import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { EquipComponent } from './pages/equip/equip.component';
import { WeaponComponent } from './pages/equip/weapon/weapon.component';
import { ArmorComponent } from './pages/equip/armor/armor.component';
import { InvComponent } from './pages/inv/inv.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';
import { FabComponent } from './shared/fab/fab.component';

import { FormManagementService } from './services/form-management.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListMultiComponent,
    CharComponent,
    StatsComponent,
    EquipComponent,
    InvComponent,
    ResetComponent,
    WeaponComponent,
    ArmorComponent,
    BagsComponent,
    CampComponent,
    FabComponent
  ],
  entryComponents: [ResetComponent],
  imports: [BrowserModule, ReactiveFormsModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FormManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
