import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { PERSONAS } from 'src/app/consts/storage.consts';

import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-persona-select',
  templateUrl: './persona-select.component.html',
  styleUrls: ['./persona-select.component.scss']
})
export class PersonaSelectComponent implements OnInit {
  personas: Persona[];
  constructor(private alert: AlertController, private toast: ToastController, private store: Storage) {}

  ngOnInit() {
    this.store.get(PERSONAS).then(data => {
      this.personas = data ? data : [];
    });
  }

  selectPersona(persona: Persona) {
    console.log(persona);
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

  createPersona(data) {
    if (data.charName) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      /** TODO: Use index in array as id? */
      const index = this.personas.find(char => char.id === `char${this.personas.length}`) ? this.personas.length + 1 : this.personas.length;
      const newPersona = { id: `char${index}`, name: data.charName, color: `#${randomColor}`, sheet: null };
      this.personas.push(newPersona);
      this.store.set(PERSONAS, this.personas);
      this.presentToast('created');
    } else {
      this.presentToast('');
      return false;
    }
  }

  async addPersonaModal() {
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
          handler: data => this.createPersona(data)
        }
      ]
    });

    await alert.present();
  }

  deletePersona(persona: Persona) {
    this.personas.splice(this.personas.indexOf(persona), 1);
    this.store.set(PERSONAS, this.personas);
    this.presentToast('deleted');
  }

  async deletePersonaModal(persona: Persona) {
    const alert = await this.alert.create({
      header: 'Supprimer un personnage',
      message: 'Etes vous sure de vouloir supprimer ce personnage ?',
      buttons: [
        {
          text: 'Nan !'
        },
        {
          text: 'Ouais !',
          handler: () => this.deletePersona(persona)
        }
      ]
    });

    await alert.present();
  }
}
