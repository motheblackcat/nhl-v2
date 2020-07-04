import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { InvComponent } from './pages/inv/inv.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { ArmorComponent } from './pages/armor/armor.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';

import { ListComponent } from './shared/list/list.component';
import { ListMultiComponent } from './shared/list-multi/list-multi.component';

export const routes: Routes = [
  {
    path: 'char',
    component: CharComponent,
    data: {
      title: 'personnage',
      targetForm: 'charForm',
      icon: 'body'
    }
  },
  {
    path: 'stats',
    component: StatsComponent,
    data: {
      title: 'statistiques',
      targetForm: 'statsForm',
      icon: 'bar-chart'
    }
  },
  {
    path: 'skills',
    component: ListComponent,
    data: {
      title: 'compétences',
      placeholder: 'Ajouter une compétence.',
      targetForm: 'skillsForm',
      icon: 'hand-right',
      useSelect: true
    }
  },
  {
    path: 'equip',
    component: InvComponent,
    data: {
      icon: 'shirt'
    },
    children: [
      { path: '', redirectTo: 'weapon', pathMatch: 'full' },
      {
        path: 'weapon',
        component: WeaponComponent,
        data: {
          title: 'armement et baston',
          targetForm: 'weaponsForm',
          icon: 'flash'
        }
      },
      {
        path: 'armor',
        component: ArmorComponent,
        data: {
          title: 'armure et protection',
          targetForm: 'armorsForm',
          icon: 'shirt'
        }
      }
    ]
  },
  {
    path: 'inv',
    component: InvComponent,
    data: {
      icon: 'cube'
    },
    children: [
      {
        path: 'quest',
        component: ListComponent,
        data: {
          title: 'objets de quete',
          placeholder: 'Ajouter un objet de quête.',
          targetForm: 'questForm',
          icon: 'help'
        }
      },
      {
        path: 'loot',
        component: ListComponent,
        data: {
          title: 'butin a revendre (ou pas)',
          subtitle: 'tout ces machins volés sur les innocents, ou récupérés dans des coffres...',
          placeholder: 'Ajouter du butin.',
          targetForm: 'lootForm',
          icon: 'cash'
        }
      },
      {
        path: 'bags',
        component: BagsComponent,
        data: {
          title: 'sac et transport',
          targetForm: 'bagsForm',
          icon: 'basket'
        }
      },
      {
        path: 'camp',
        component: CampComponent,
        data: {
          title: 'materiel de bivouac et camping',
          targetForm: 'campForm',
          icon: 'bonfire'
        }
      },
      {
        path: 'food',
        component: ListComponent,
        data: {
          title: 'bouffe et boisson',
          placeholder: 'Ajouter un aliment / boisson.',
          targetForm: 'foodForm',
          icon: 'beer'
        }
      },
      {
        path: 'special',
        component: ListMultiComponent,
        data: {
          title: 'objets speciaux, maudit ou reliques',
          targetForm: 'specialForm',
          nameLabel: 'objet',
          effectLabel: 'bonus/effets',
          icon: 'color-wand'
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
          targetForm: 'gemsForm',
          icon: 'contract'
        }
      },
      {
        path: 'potions',
        component: ListMultiComponent,
        data: {
          title: 'potions, poisons, antidotes et ingrédients magiques',
          targetForm: 'potionsForm',
          nameLabel: 'doses',
          effectLabel: 'effets',
          icon: 'flask'
        }
      },
      {
        path: 'precious',
        component: ListComponent,
        data: {
          title: 'machin precieux',
          subtitle: 'titres particuliers, montures, habitations, héritages et autre souvenirs...',
          placeholder: 'Ajouter un objet précieux.',
          targetForm: 'preciousForm',
          icon: 'today'
        }
      },
      { path: '', redirectTo: 'quest', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'char', pathMatch: 'full' },
  { path: '**', redirectTo: 'char' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
