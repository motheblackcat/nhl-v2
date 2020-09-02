import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from '@ionic/angular';

import { Persona } from 'src/app/interfaces/persona.interface';
import { PERSONAS } from 'src/app/consts/storage.consts';

@Component({
  selector: 'app-persona-select',
  templateUrl: './persona-select.component.html',
  styleUrls: ['./persona-select.component.scss']
})
export class PersonaSelectComponent implements OnInit {
  personas: Persona[];
  constructor(private alert: AlertController, private toast: ToastController) {}

  ngOnInit() {
    // this.storage.get(PERSONAS).then(data => {
    //   this.personas = data ? data : [];
    // });
  }

  selectChar(char) {
    console.log(char);
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

  async addChar() {
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

  createPersona(data) {
    console.log(data);

    // if (data.charName) {
    //   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //   const index = this.personas.find(char => char.id === `char${this.personas.length}`)
    //      ? this.personas.length + 1 : this.personas.length;
    //   const newChar = { id: `char${index}`, name: data.charName, color: `#${randomColor}`, sheet: null };
    //   this.personas.push(newChar);
    //   this.storage.set('charList', this.personas);
    //   this.presentToast('created');
    // } else {
    //   this.presentToast('');
    //   return false;
    // }
  }

  deletePersona() {
    // this.personas.splice(this.personas.indexOf(char), 1);
    // this.store.set(PERSONAS, this.personas);
    // this.presentToast('deleted');
  }

  async deleteChar(char) {
    const alert = await this.alert.create({
      header: 'Supprimer un personnage',
      message: 'Etes vous sure de vouloir supprimer ce personnage ?',
      buttons: [
        {
          text: 'Nan !'
        },
        {
          text: 'Ouais !',
          handler: () => this.deletePersona()
        }
      ]
    });

    await alert.present();
  }
}
