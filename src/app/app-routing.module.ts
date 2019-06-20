import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './shared/tabs/tabs.component';

import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { EquipComponent } from './pages/equip/equip.component';
import { InvComponent } from './pages/inv/inv.component';
import { WeaponComponent } from './pages/equip/weapon/weapon.component';
import { ArmorComponent } from './pages/equip/armor/armor.component';
import { ListComponent } from './shared/list/list.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';
import { SpecialComponent } from './pages/inv/special/special.component';
import { GemsComponent } from './pages/inv/gems/gems.component';
import { PotionsComponent } from './pages/inv/potions/potions.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/char', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'char',
        component: CharComponent,
        data: {
          title: 'personnage',
          targetForm: 'charForm'
        }
      },
      {
        path: 'stats',
        component: StatsComponent,
        data: {
          title: 'statistiques',
          targetForm: 'statsForm'
        }
      },
      {
        path: 'skills',
        component: ListComponent,
        data: {
          title: 'compétences',
          placeholder: 'Ajouter une compétence.',
          targetForm: 'skillsForm'
        }
      },
      {
        path: 'equip',
        component: EquipComponent,
        children: [
          { path: '', redirectTo: 'weapon', pathMatch: 'full' },
          { path: 'weapon', component: WeaponComponent },
          { path: 'armor', component: ArmorComponent }
        ]
      },
      {
        path: 'inv',
        component: InvComponent,
        children: [
          { path: '', redirectTo: 'quest', pathMatch: 'full' },
          {
            path: 'quest',
            component: ListComponent,
            data: {
              title: 'objets de quete',
              placeholder: 'Ajouter un objet de quête.',
              dataKey: 'questData'
            }
          },
          {
            path: 'loot',
            component: ListComponent,
            data: {
              title: 'butin a revendre (ou pas)',
              subtitle: 'tout ces machins volés sur les innocents, ou récupérés dans des coffres...',
              placeholder: 'Ajouter du butin.',
              dataKey: 'lootData'
            }
          },
          { path: 'bags', component: BagsComponent },
          { path: 'camp', component: CampComponent },
          {
            path: 'food',
            component: ListComponent,
            data: {
              title: 'bouffe et boisson',
              placeholder: 'Ajouter un aliment / boisson.',
              dataKey: 'foodData'
            }
          },
          { path: 'special', component: SpecialComponent },
          { path: 'gems', component: GemsComponent },
          { path: 'potions', component: PotionsComponent },
          {
            path: 'precious',
            component: ListComponent,
            data: {
              title: 'machin precieux',
              subtitle: 'titres particuliers, montures, habitations, héritages et autre souvenirs...',
              placeholder: 'Ajouter un objet précieux.',
              dataKey: 'preciousData'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
