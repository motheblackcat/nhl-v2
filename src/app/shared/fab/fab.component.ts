import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ResetComponent } from '../reset/reset.component';
import { Config } from 'src/app/interfaces/config.interface';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html'
})
export class FabComponent implements OnInit {
  configs: Config[] = [];
  icon: string;

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    this.router.config.filter(route => route.data).forEach(route => this.configs.push({ path: `/${route.path}`, icon: route.data.icon }));

    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.icon = event.url === '/' ? 'body' : this.configs.find(route => event.url.includes(route.path)).icon;
      }
    });
  }

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ResetComponent,
      cssClass: 'modal'
    });
    return await modal.present();
  }
}
