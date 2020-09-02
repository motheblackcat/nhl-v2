import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuConfig } from 'src/app/interfaces/menu-config.interface';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html'
})
export class InvComponent implements OnInit {
  config: MenuConfig[] = [];
  icon: string;
  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activedRoute.routeConfig.children
      .filter(route => route.data)
      .forEach(route =>
        this.config.push({
          path: `/${this.activedRoute.routeConfig.path}/${route.path}`,
          icon: route.data.icon
        })
      );

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const config = this.config.find(route => event.url.includes(route.path));
        this.icon = config ? config.icon : event.url === '/inv' ? 'help' : 'flash';
      }
    });
  }
}
