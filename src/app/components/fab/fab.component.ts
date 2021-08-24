import { Route } from 'src/app/interfaces/route.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html'
})
export class FabComponent implements OnInit {
  routes: Route[] = [];
  icon: string;
  display: boolean = false;

  constructor(private router: Router, private personaService: PersonaService) { }

  ngOnInit() {
    this.router.config.filter(route => route.data).forEach(route => this.routes.push({ path: `/${route.path}`, icon: route.data.icon }));
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.display = event.url !== '/persona' && event.url !== '/';
        const currentRoute = this.routes.find(route => route.path === event.url);
        this.icon = currentRoute ? currentRoute.icon : '';
      }
    });
  }
}
