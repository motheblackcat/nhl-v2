import { Component, OnInit, ViewChild } from '@angular/core';

import { IonTabBar } from '@ionic/angular';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.scss']
})

export class EquipComponent implements OnInit {
  @ViewChild(IonTabBar) tabBar: IonTabBar;

  constructor() { }

  ngOnInit(): void {
    // Sub menu icon not correctly highlighted
    this.tabBar.selectedTab = "weapon";
  }
}
