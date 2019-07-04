import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})
export class EquipComponent implements OnInit {
  icon = 'shirt';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/equip/armor':
            this.icon = 'shirt';
            break;
          default:
            this.icon = 'flash';
            break;
        }
      }
    });
  }
}
