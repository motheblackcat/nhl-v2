import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonaGuard } from './guards/persona.guard';
import { ArmorComponent } from './pages/armor/armor.component';
import { CharComponent } from './pages/char/char.component';
import { BagsComponent } from './pages/inv/bags/bags.component';
import { CampComponent } from './pages/inv/camp/camp.component';
import { InvComponent } from './pages/inv/inv.component';
import { ListMultiComponent } from './pages/inv/list-multi/list-multi.component';
import { ListComponent } from './pages/inv/list/list.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { SkillComponent } from './pages/skill/skill.component';
import { StatsComponent } from './pages/stats/stats.component';
import { WeaponComponent } from './pages/weapon/weapon.component';

export const routes: Routes = [
  {
    path: 'persona',
    component: PersonaComponent,
    data: {
      icon: 'people'
    }
  },
  {
    path: 'char',
    component: CharComponent,
    data: {
      icon: 'body'
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    data: {
      icon: 'bar-chart'
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'skills',
    component: SkillComponent,
    data: {
      icon: 'school',
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'weapon',
    component: WeaponComponent,
    data: {
      icon: 'flash'
    },
    canActivate: [PersonaGuard]
  },
  {
    path: 'armor',
    component: ArmorComponent,
    data: {
      icon: 'shield'
    },
    canActivate: [PersonaGuard]
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
          title: 'objets de quête',
          subtitle: 'A quoi peut bien servir cette clé en forme de choux ?',
          placeholder: 'ajouter un objet de quête.',
          formName: 'quest',
          icon: 'help'
        }
      },
      {
        path: 'loot',
        component: ListComponent,
        data: {
          title: 'butin a revendre (ou pas)',
          subtitle: 'Tous ces machins volés sur les innocents, ou récupérés dans des coffres...',
          placeholder: 'Ajouter du butin.',
          formName: 'loot',
          icon: 'cash'
        }
      },
      {
        path: 'bags',
        component: BagsComponent,
        data: {
          title: 'sacs et bourses',
          subtitle: 'Si vous me dites que personne n\'a de briquet...',
          formName: 'bags',
          icon: 'bag-handle'
        }
      },
      {
        path: 'camp',
        component: CampComponent,
        data: {
          title: 'materiel de bivouac et camping',
          subtitle: 'Tu peux venir dans ma couche !',
          formName: 'camp',
          icon: 'bonfire'
        }
      },
      {
        path: 'food',
        component: ListComponent,
        data: {
          title: 'bouffe et boisson',
          subtitle: 'C\'est pour vous les ours à la bière ?',
          placeholder: 'ajouter un aliment / boisson.',
          formName: 'food',
          icon: 'beer'
        }
      },
      {
        path: 'mounts',
        component: ListMultiComponent,
        data: {
          title: 'montures et animaux',
          subtitle: 'Gouzi gouzi gouzi !',
          formName: 'mounts',
          nameLabel: 'bestiole',
          effectLabel: 'détails',
          icon: 'paw'
        }
      },
      {
        path: 'special',
        component: ListMultiComponent,
        data: {
          title: 'objets speciaux, maudit ou reliques',
          subtitle: 'Scroll of stupidity ? C\'est quoi ?',
          formName: 'special',
          nameLabel: 'nom',
          effectLabel: 'bonus/effets',
          icon: 'skull'
        }
      },
      {
        path: 'gems',
        component: ListMultiComponent,
        data: {
          title: 'gemmes et pierres précieuses',
          subtitle: 'U. G. : unité goltor (Pas de blague... On déconne pas avec les gemmes !)',
          nameLabel: 'nom',
          effectLabel: 'u. g.',
          formName: 'gems',
          icon: 'diamond'
        }
      },
      {
        path: 'potions',
        component: ListMultiComponent,
        data: {
          title: 'potions, poisons, antidotes et ingrédients magiques',
          subtitle: 'Où ai je bien pu mettre ces yeux de Globzoule ?',
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
          title: 'machins precieux',
          subtitle: 'Titres particuliers, habitations, héritages et autre souvenirs...',
          placeholder: 'ajouter un objet précieux.',
          formName: 'precious',
          icon: 'sparkles'
        }
      },
      { path: '', redirectTo: 'quest', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'persona' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
