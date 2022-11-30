import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

export enum TOASTER_COLOR {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  /**
   * Show a toast notification with predefined parameters
   * @param msg the message to be displayed
   */
  async showToast(message: string, color?: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }
}
