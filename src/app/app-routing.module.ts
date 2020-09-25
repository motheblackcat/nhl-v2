import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaComponent } from './pages/persona/persona.component';
import { CharComponent } from './pages/char/char.component';
import { StatsComponent } from './pages/stats/stats.component';
import { InvComponent } from './pages/inv/inv.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { ArmorComponent } from './pages/armor/armor.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';

import { ListComponent } from './shared/list/list.component';
import { ListMultiComponent } from './shared/list-multi/list-multi.component';
import { PersonaGuard } from './guards/persona.guard';

export const routes: Routes = [
  {
    path: '',
    component: PersonaComponent
  },
  {
    path: 'char',
    component: CharComponent,
    data: {
      title: 'personnage',
      formName: 'char',
      icon: 'body'
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    data: {
      title: 'statistiques',
      formName: 'stats',
      icon: 'bar-chart'
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'skills',
    component: ListComponent,
    data: {
      title: 'compétences',
      placeholder: 'Ajouter une compétence.',
      formName: 'skills',
      icon: 'hand-right',
      useSelect: true
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'equip',
    component: InvComponent,
    data: {
      icon: 'shirt'
    },
    canActivate: [PersonaGuard],
    children: [
      { path: '', redirectTo: 'weapon', pathMatch: 'full' },
      {
        path: 'weapon',
        component: WeaponComponent,
        data: {
          title: 'armement et baston',
          formName: 'weapons',
          icon: 'flash'
        }
      },
      {
        path: 'armor',
        component: ArmorComponent,
        data: {
          title: 'armure et protection',
          formName: 'armors',
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
    canActivate: [PersonaGuard],
    children: [
      {
        path: 'quest',
        component: ListComponent,
        data: {
          title: 'objets de quete',
          placeholder: 'Ajouter un objet de quête.',
          formName: 'quest',
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
          formName: 'loot',
          icon: 'cash'
        }
      },
      {
        path: 'bags',
        component: BagsComponent,
        data: {
          title: 'sac et transport',
          formName: 'bags',
          icon: 'basket'
        }
      },
      {
        path: 'camp',
        component: CampComponent,
        data: {
          title: 'materiel de bivouac et camping',
          formName: 'camp',
          icon: 'bonfire'
        }
      },
      {
        path: 'food',
        component: ListComponent,
        data: {
          title: 'bouffe et boisson',
          placeholder: 'Ajouter un aliment / boisson.',
          formName: 'food',
          icon: 'beer'
        }
      },
      {
        path: 'special',
        component: ListMultiComponent,
        data: {
          title: 'objets speciaux, maudit ou reliques',
          formName: 'special',
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
          formName: 'gems',
          icon: 'contract'
        }
      },
      {
        path: 'potions',
        component: ListMultiComponent,
        data: {
          title: 'potions, poisons, antidotes et ingrédients magiques',
          formName: 'potions',
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
          formName: 'precious',
          icon: 'today'
        }
      },
      { path: '', redirectTo: 'quest', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
