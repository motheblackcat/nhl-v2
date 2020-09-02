import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FabComponent } from './shared/fab/fab.component';
import { SkillsDetailsComponent } from './shared/skill-desc/skill-desc.component';
import { ListComponent } from './shared/list/list.component';
import { ListMultiComponent } from './shared/list-multi/list-multi.component';
import { ResetComponent } from './shared/reset/reset.component';

import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { ArmorComponent } from './pages/armor/armor.component';
import { InvComponent } from './pages/inv/inv.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';

import { FormManagementService } from './services/form-management.service';
import { PersonaSelectComponent } from './pages/persona-select/persona-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListMultiComponent,
    PersonaSelectComponent,
    CharComponent,
    StatsComponent,
    InvComponent,
    ResetComponent,
    WeaponComponent,
    ArmorComponent,
    BagsComponent,
    CampComponent,
    FabComponent,
    SkillsDetailsComponent
  ],
  entryComponents: [ResetComponent],
  imports: [BrowserModule, ReactiveFormsModule, IonicModule.forRoot({ mode: 'md' }), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [StatusBar, SplashScreen, Vibration, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FormManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
