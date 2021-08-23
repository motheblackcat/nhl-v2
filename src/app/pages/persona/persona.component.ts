import { ToasterTypes } from 'src/app/consts/toaster-types.consts';
import { Persona } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {
  constructor(private alert: AlertController, private toast: ToastController, public personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.currentPersona = null;
    this.personaService.getPersonas();
  }

  selectPersona(persona: Persona) {
    this.personaService.currentPersona = persona;
  }

  async presentToast(type: string): Promise<any> {
    const toast = await this.toast.create({
      message: type === ToasterTypes.DELETED ? 'Le personnage a été zigouillé !' : 'Il faut entrer un nom !',
      duration: 2000,
      color: type === ToasterTypes.DELETED ? 'dark' : 'danger',
      position: 'top'
    });
    toast.present();
  }

  addPersona(personaName: string) {
    if (personaName) {
      this.personaService.addPersona(personaName);
    } else {
      this.presentToast('');
      return false;
    }
  }

  async addPersonaAlert(): Promise<any> {
    const alert = await this.alert.create({
      header: 'Créer un personnage',
      cssClass: 'alert',
      inputs: [
        {
          name: 'personaName',
          type: 'text',
          placeholder: 'Nom'
        }
      ],
      buttons: [
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
    this.presentToast(ToasterTypes.DELETED);
  }

  async removePersonaAlert(persona: Persona): Promise<any> {
    const alert = await this.alert.create({
      header: 'Supprimer un personnage',
      message: 'Etes vous sure de vouloir supprimer ce personnage ?',
      cssClass: 'alert',
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
