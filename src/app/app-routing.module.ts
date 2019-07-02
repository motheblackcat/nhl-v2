import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { EquipComponent } from './pages/equip/equip.component';
import { InvComponent } from './pages/inv/inv.component';
import { WeaponComponent } from './pages/equip/weapon/weapon.component';
import { ArmorComponent } from './pages/equip/armor/armor.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';

import { ListComponent } from './shared/list/list.component';
import { ListMultiComponent } from './shared/list-multi/list-multi.component';

const routes: Routes = [
  { path: '', redirectTo: 'char', pathMatch: 'full' },
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
      { path: '', redirectTo: 'armor', pathMatch: 'full' },
      {
        path: 'weapon',
        component: WeaponComponent,
        data: {
          title: 'armement et baston',
          targetForm: 'weaponsForm'
        }
      },
      {
        path: 'armor',
        component: ArmorComponent,
        data: {
          title: 'armure et protection',
          targetForm: 'armorsForm'
        }
      }
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
          targetForm: 'questForm'
        }
      },
      {
        path: 'loot',
        component: ListComponent,
        data: {
          title: 'butin a revendre (ou pas)',
          subtitle: 'tout ces machins volés sur les innocents, ou récupérés dans des coffres...',
          placeholder: 'Ajouter du butin.',
          targetForm: 'lootForm'
        }
      },
      {
        path: 'bags',
        component: BagsComponent,
        data: {
          title: 'sac et transport',
          targetForm: 'bagsForm'
        }
      },
      {
        path: 'camp',
        component: CampComponent,
        data: {
          title: 'materiel de bivouac et camping',
          targetForm: 'campForm'
        }
      },
      {
        path: 'food',
        component: ListComponent,
        data: {
          title: 'bouffe et boisson',
          placeholder: 'Ajouter un aliment / boisson.',
          targetForm: 'foodForm'
        }
      },
      {
        path: 'special',
        component: ListMultiComponent,
        data: {
          title: 'objets speciaux, maudit ou reliques',
          targetForm: 'specialForm',
          nameLabel: 'objet',
          effectLabel: 'bonus / effets'
        }
      },
      {
        path: 'gems',
        component: ListMultiComponent,
        data: {
          title: 'gemmes et pierres précieuses',
          subtitle: 'u. g. : unité goltor',
          nameLabel: 'nom',
          effectLabel: 'u. g.',
          targetForm: 'gemsForm'
        }
      },
      {
        path: 'potions',
        component: ListMultiComponent,
        data: {
          title: 'potions, poisons, antidotes et ingrédients magiques',
          targetForm: 'potionsForm',
          nameLabel: 'doses',
          effectLabel: 'effets'
        }
      },
      {
        path: 'precious',
        component: ListComponent,
        data: {
          title: 'machin precieux',
          subtitle: 'titres particuliers, montures, habitations, héritages et autre souvenirs...',
          placeholder: 'Ajouter un objet précieux.',
          targetForm: 'preciousForm'
        }
      }
    ]
  },
  { path: '**', redirectTo: 'char' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
