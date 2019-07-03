import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ResetComponent } from '../reset/reset.component';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html'
})
export class FabComponent implements OnInit {
  icon = 'body';
  constructor(public modalController: ModalController, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/stats':
            this.icon = 'stats';
            break;
          case '/skills':
            this.icon = 'hand';
            break;
          case '/inv':
            this.icon = 'cube';
            break;
          case '/equip':
            this.icon = 'shirt';
            break;
          case '/equip/armor':
            this.icon = 'shirt';
            break;
          case '/equip/weapon':
            this.icon = 'shirt';
            break;
          default:
            this.icon = 'body';
            break;
        }
      }
    });
  }

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ResetComponent,
      cssClass: 'reset-modal'
    });
    return await modal.present();
  }
}
