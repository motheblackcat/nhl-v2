import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { AlertController, ToastController } from '@ionic/angular';

import { Persona } from 'src/app/interfaces/persona.interface';

import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-select',
  templateUrl: './persona-select.component.html',
  styleUrls: ['./persona-select.component.scss']
})
export class PersonaSelectComponent implements OnInit {
  personas$: Observable<Persona[]>;
  constructor(private alert: AlertController, private toast: ToastController, private personaService: PersonaService) {}

  /** TODO: Could be combined into only 1 statement? */
  ngOnInit() {
    this.personaService.currentPersona = null;
    this.personaService.getPersonas();
    this.personas$ = this.personaService.personas$;
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

  addPersona(modalData) {
    if (modalData.charName) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const newPersona = { name: modalData.charName, color: `#${randomColor}`, sheet: null };
      this.personaService.addPersona(newPersona);
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
          name: 'charName',
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
          handler: data => this.addPersona(data)
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
