import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { FormManagementService } from 'src/app/services/form-management.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  constructor(public modal: ModalController, private toast: ToastController, private fm: FormManagementService) {}

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
    this.fm.reset();
    this.presentToast();
    this.modal.dismiss();
  }
}
