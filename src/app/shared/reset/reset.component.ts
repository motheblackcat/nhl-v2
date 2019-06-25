import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  constructor(public modal: ModalController, private toast: ToastController) {}

  async presentToast(): Promise<any> {
    const toast = await this.toast.create({
      message: 'Toutes les données ont été effacées !',
      duration: 2000,
      color: 'dark',
      position: 'top'
    });
    toast.present();
  }

  reset(): void {
    // Fix reset on FormArrays
    mainForm.reset();
    localStorage.clear();
    this.presentToast();
    this.modal.dismiss();
  }
}
