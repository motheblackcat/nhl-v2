import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  /**
   * Show a toast notification with predefined parameters
   * @param msg the message to be displayed
   */
  async showToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }
}
