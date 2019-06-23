import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ResetComponent } from '../reset/reset.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html'
})
export class FabComponent {
  constructor(public modalController: ModalController) {}

  async presentModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ResetComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }
}
