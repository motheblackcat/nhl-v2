import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ResetComponent } from '../reset/reset.component';
import { MenuConfig } from 'src/app/models/MenuConfig';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html'
})
export class FabComponent implements OnInit {
  config: MenuConfig[] = [];
  icon: string;

  constructor(
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.router.config
      .filter(route => route.data)
      .forEach(route =>
        this.config.push({ path: `/${route.path}`, icon: route.data.icon })
      );

    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.icon = this.config.find(
          route => route.path === `/${event.url.split('/')[1]}`
        ).icon;
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
