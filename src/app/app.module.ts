import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabComponent } from './components/fab/fab.component';
import { ArmorComponent } from './pages/armor/armor.component';
import { CharComponent } from './pages/char/char.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';
import { InvComponent } from './pages/inv/inv.component';
import { ListMultiComponent } from './pages/inv/list-multi/list-multi.component';
import { ListComponent } from './pages/inv/list/list.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { SkillDetailsComponent } from './pages/skill/skill-details/skill-details.component';
import { SkillListComponent } from './pages/skill/skill-list/skill-list.component';
import { SkillComponent } from './pages/skill/skill.component';
import { StatsComponent } from './pages/stats/stats.component';
import { WeaponComponent } from './pages/weapon/weapon.component';

@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    SkillComponent,
    SkillListComponent,
    SkillDetailsComponent,
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
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, IonicModule.forRoot({ mode: 'md' }), IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
