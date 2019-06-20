import { Component } from '@angular/core';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html',
  styleUrls: ['./inv.component.scss']
})
export class InvComponent {
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
}
