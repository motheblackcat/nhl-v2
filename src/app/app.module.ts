import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorComponent } from './pages/armor/armor.component';
import { CharComponent } from './pages/char/char.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';
import { InvComponent } from './pages/inv/inv.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { StatsComponent } from './pages/stats/stats.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { FabComponent } from './shared/fab/fab.component';
import { ListMultiComponent } from './shared/list-multi/list-multi.component';
import { ListComponent } from './shared/list/list.component';
import { SkillsDetailsComponent } from './shared/skill-desc/skill-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    SkillsDetailsComponent,
    ListComponent,
    ListMultiComponent,
    PersonaComponent,
    CharComponent,
    StatsComponent,
    InvComponent,
    BagsComponent,
    CampComponent,
    WeaponComponent,
    ArmorComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, IonicModule.forRoot({ mode: 'md' }), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [StatusBar, SplashScreen, Vibration, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
