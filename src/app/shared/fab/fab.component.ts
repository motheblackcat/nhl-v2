import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { Route } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html'
})
export class FabComponent implements OnInit {
  routes: Route[] = [];
  icon: string;
  display: boolean;

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    this.display = false;
    this.router.config.filter(route => route.data).forEach(route => this.routes.push({ path: `/${route.path}`, icon: route.data.icon }));
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.display = event.url !== '/persona';
        const currentRoute = this.routes.find(route => route.path === event.url);
        this.icon = currentRoute ? currentRoute.icon : '';
      }
    });
  }
}
