import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html'
})
export class ResetComponent implements OnInit {
  constructor(public modal: ModalController, private toast: ToastController, private vibration: Vibration, private fm: PersonaService) {}

  ngOnInit() {
    this.vibration.vibrate(500);
  }

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
    // this.fm.reset();
    this.presentToast();
    this.modal.dismiss();
  }
}
