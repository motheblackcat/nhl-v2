import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Route } from 'src/app/interfaces/route.interface';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html'
})
export class InvComponent implements OnInit {
  routes: Route[] = [];
  icon: string;
  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activedRoute.routeConfig.children
      .filter(route => route.data)
      .forEach(route =>
        this.routes.push({
          path: `/${this.activedRoute.routeConfig.path}/${route.path}`,
          icon: route.data.icon
        })
      );

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.routes.find(route => route.path === event.url);
        this.icon = currentRoute ? currentRoute.icon : event.url === '/inv' ? 'help' : 'flash';
      }
    });
  }
}
