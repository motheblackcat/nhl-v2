import { Component } from '@angular/core';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html',
  styleUrls: ['./inv.component.scss']
})
export class InvComponent {
  config = [
    { tab: 'inv/quest', icon: 'help', label: ''},
    { tab: 'inv/loot', icon: 'cash', label: ''},
    { tab: 'inv/bags', icon: 'basket', label: ''},
    { tab: 'inv/camp', icon: 'bonfire', label: ''},
    { tab: 'inv/food', icon: 'beer', label: ''},
    { tab: 'inv/special', icon: 'color-wand', label: ''},
    { tab: 'inv/gems', icon: 'contract', label: ''},
    { tab: 'inv/potions', icon: 'flask', label: ''},
    { tab: 'inv/precious', icon: 'today', label: ''}
  ]
  constructor() { }
}
