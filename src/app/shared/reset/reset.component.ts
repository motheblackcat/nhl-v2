import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

import { mainForm } from 'src/app/models/form';
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
    this.fm.resetArray.forEach(form => (mainForm.get(form) as FormArray).clear());
    for (const control in (mainForm.get('weaponsForm') as FormGroup).controls) {
      if (control) {
        (mainForm
          .get('weaponsForm')
          .get(control)
          .get('ef') as FormArray).clear();
      }
    }
    for (const control in (mainForm.get('armorsForm') as FormGroup).controls) {
      if (control !== 'equ' && control !== 'tdm') {
        (mainForm
          .get('armorsForm')
          .get(control)
          .get('ef') as FormArray).clear();
      }
    }
    (mainForm.get('bagsForm').get('bags') as FormArray).clear();
    (mainForm.get('bagsForm').get('pooches') as FormArray).clear();
    (mainForm.get('campForm').get('mat') as FormArray).clear();
    mainForm.reset();
    localStorage.clear();
    this.presentToast();
    this.modal.dismiss();
  }
}
