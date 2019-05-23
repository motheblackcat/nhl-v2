import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ResetComponent } from 'src/app/shared/reset/reset.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  constructor(public modalController: ModalController) {}

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ResetComponent
    });
    return await modal.present();
  }
}
