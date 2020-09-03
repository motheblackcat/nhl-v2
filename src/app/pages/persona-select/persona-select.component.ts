import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from '@ionic/angular';

import { PersonaService } from 'src/app/services/persona.service';

import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-persona-select',
  templateUrl: './persona-select.component.html',
  styleUrls: ['./persona-select.component.scss']
})
export class PersonaSelectComponent implements OnInit {
  constructor(private alert: AlertController, private toast: ToastController, private personaService: PersonaService) {}

  /** TODO: Could be combined into only 1 statement? */
  ngOnInit() {
    this.personaService.currentPersona = null;
    this.personaService.getPersonas();
  }

  selectPersona(persona: Persona) {
    this.personaService.currentPersona = persona;
  }

  /** TODO: Add enum for type */
  async presentToast(type: string): Promise<any> {
    const toast = await this.toast.create({
      message:
        type === 'created'
          ? 'Le personnage a été crée !'
          : type === 'deleted'
          ? 'Le personnage a été zigouillé !'
          : 'Il faut entrer un nom !',
      duration: 2000,
      color: type === 'created' ? 'success' : type === 'deleted' ? 'dark' : 'danger',
      position: 'top'
    });
    toast.present();
  }

  addPersona(personaName: string) {
    if (personaName) {
      this.personaService.addPersona(personaName);
      this.presentToast('created');
    } else {
      this.presentToast('');
      return false;
    }
  }

  async addPersonaModal(): Promise<any> {
    const alert = await this.alert.create({
      header: 'Créer un personnage',
      message: 'Veuillez indiquer le nom du personnage.',
      inputs: [
        {
          name: 'personaName',
          type: 'text',
          placeholder: 'Nom du personnage'
        }
      ],
      buttons: [
        {
          text: 'Nan !'
        },
        {
          text: 'Ouais !',
          handler: data => this.addPersona(data.personaName)
        }
      ]
    });

    await alert.present();
  }

  removePersona(persona: Persona) {
    this.personaService.removePersona(persona);
    this.presentToast('deleted');
  }

  async removePersonaModal(persona: Persona): Promise<any> {
    const alert = await this.alert.create({
      header: 'Supprimer un personnage',
      message: 'Etes vous sure de vouloir supprimer ce personnage ?',
      buttons: [
        {
          text: 'Nan !'
        },
        {
          text: 'Ouais !',
          handler: () => this.removePersona(persona)
        }
      ]
    });

    await alert.present();
  }
}
