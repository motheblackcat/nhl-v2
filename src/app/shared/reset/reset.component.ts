import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormArray } from '@angular/forms';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  resetArray = ['skillsForm', 'questForm', 'lootForm', 'foodForm', 'specialForm', 'gemsForm', 'potionsForm', 'preciousForm'];
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
    // this.resetArray.forEach(form => mainForm.get(form).setValue(new FormArray([])));
    // (mainForm.get('potionsForm') as FormArray).clear();
    console.log(mainForm.get('potionsForm'));
    mainForm.reset();
    localStorage.clear();
    this.presentToast();
    this.modal.dismiss();
  }
}
