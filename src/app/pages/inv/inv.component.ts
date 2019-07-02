import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html'
})
export class InvComponent implements OnInit {
  config: Array<Object> = [
    { link: '/inv/quest', icon: 'help' },
    { link: '/inv/loot', icon: 'cash' },
    { link: '/inv/bags', icon: 'basket' },
    { link: '/inv/camp', icon: 'bonfire' },
    { link: '/inv/food', icon: 'beer' },
    { link: '/inv/special', icon: 'color-wand' },
    { link: '/inv/gems', icon: 'contract' },
    { link: '/inv/potions', icon: 'flask' },
    { link: '/inv/precious', icon: 'today' }
  ];
  icon = 'help';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/inv/loot':
            this.icon = 'cash';
            break;
          case '/inv/bags':
            this.icon = 'basket';
            break;
          case '/inv/camp':
            this.icon = 'bonfire';
            break;
          case '/inv/food':
            this.icon = 'beer';
            break;
          case '/inv/special':
            this.icon = 'color-wand';
            break;
          case '/inv/gems':
            this.icon = 'contract';
            break;
          case '/inv/potions':
            this.icon = 'flask';
            break;
          case '/inv/precious':
            this.icon = 'today';
            break;
          default:
            this.icon = 'help';
            break;
        }
      }
    });
  }
}
