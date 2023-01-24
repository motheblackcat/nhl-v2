import { Injectable } from '@angular/core';
import {
    AlertButton, AlertController, AlertInput, AlertOptions, ModalController
} from '@ionic/angular';

import { IPersona } from '../interfaces/persona.interface';
import { PersonaService } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController, private personaService: PersonaService) { }

  async createAlert(header?: string, message?: string, inputs?: AlertInput[], buttons?: AlertButton[]) {
    const alertOptions: AlertOptions = { header, message, inputs, buttons };
    const alert = await this.alertCtrl.create(alertOptions);
    await alert.present();
  }

  async createAddPersonaAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Ajouter un personnage',
      inputs: [
        { name: 'personaName', type: 'text', placeholder: 'Nom' }
      ],
      buttons: [
        { text: 'Nan !' },
        { text: 'Ouais !', handler: data => data.personaName ? this.personaService.addPersona(data.personaName) : false }
      ]
    });
    await alert.present();
  }

  async createRemovePersonaAlert(persona: IPersona) {
    const alert = await this.alertCtrl.create({
      header: 'Supprimer un personnage',
      message: 'Etes vous sure de vouloir supprimer ce personnage ?',
      buttons: [
        { text: 'Nan !' },
        { text: 'Ouais !', handler: () => this.personaService.removePersona(persona) }
      ]
    });
    await alert.present();
  }

  async createAddUnlistedSkillAlert(modalCtrl: ModalController) {
    const alert = await this.alertCtrl.create({
      header: 'Ajouter une compétence non listée',
      inputs: [
        { name: 'skillName', type: 'text', placeholder: 'Nom' }
      ],
      buttons: [
        { text: 'Nan !' },
        { text: 'Ouais !', handler: data => data.skillName ? modalCtrl.dismiss(data.skillName) : false }
      ]
    });
    await alert.present();
  }
}
