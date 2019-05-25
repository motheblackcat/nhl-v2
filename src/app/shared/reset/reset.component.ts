import { Component } from '@angular/core';

import { ModalController, ToastController } from '@ionic/angular';

import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  constructor(
    public modal: ModalController,
    private toast: ToastController,
    private notify: NotifierService
  ) {}

  async presentToast(): Promise<any> {
    const toast = await this.toast.create({
      message: 'Toutes les données ont été effacées !',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  reset(): void {
    this.notify.reset.next(true);
    localStorage.clear();
    this.presentToast();
    this.modal.dismiss();
  }
}
