import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  async createAlert(header?: string, message?: string, inputName?: string, handler?: (data: string) => false | any) {
    const alertOptions: AlertOptions = {
      header,
      message,
      inputs: inputName ? [{ name: inputName, placeholder: 'Nom' }] : [],
      buttons: [{ text: 'Nan !' }, { text: 'Ouais !', handler }]
    };
    const alert = await this.alertCtrl.create(alertOptions);
    await alert.present();
  }
}
