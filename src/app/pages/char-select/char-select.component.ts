import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.component.html',
  styleUrls: ['./char-select.component.scss']
})
export class CharSelectComponent implements OnInit {
  // TODO: Type for char
  public chars = [];
  constructor(private storage: Storage, private alert: AlertController, private toast: ToastController) {}

  ngOnInit() {
    this.storage.get('charList').then(charList => {
      if (charList) {
        this.chars = charList;
      }
    });
  }

  selectChar(char) {
    console.log(char);
  }

  // TODO: Add enum for type
  async presentToast(type: string): Promise<any> {
    const toast = await this.toast.create({
      message:
        type === 'created'
          ? 'Le personnage a bien été créer !'
          : type === 'deleted'
          ? 'Le personnage a bien été zigouiller !'
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
          handler: data => {
            if (data.charName) {
              const randomColor = Math.floor(Math.random() * 16777215).toString(16);
              const index = this.chars.find(char => char.id === `char${this.chars.length}`) ? this.chars.length + 1 : this.chars.length;
              const newChar = { id: `char${index}`, name: data.charName, color: `#${randomColor}` };
              this.chars.push(newChar);
              this.storage.set('charList', this.chars);
              this.presentToast('created');
            } else {
              this.presentToast('');
              return false;
            }
          }
        }
      ]
    });

    await alert.present();
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
          handler: () => {
            this.chars.splice(this.chars.indexOf(char), 1);
            this.storage.set('charList', this.chars);
            this.presentToast('deleted');
          }
        }
      ]
    });

    await alert.present();
  }
}
