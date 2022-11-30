import { IPersona } from 'src/app/interfaces/persona.interface';
import { FileService } from 'src/app/services/file.service';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {
  constructor(private alertCtrl: AlertController, private router: Router, public personaService: PersonaService, private fileService: FileService) { }

  ngOnInit() {
    this.personaService.getPersonas();
  }

  selectPersona(persona: IPersona) {
    this.personaService.currentPersona = persona;
    this.router.navigate(['/char']);
  }

  async addPersonaAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Ajouter un personnage',
      inputs: [
        {
          name: 'personaName',
          type: 'text',
          placeholder: 'Nom'
        }
      ],
      buttons: [
        { text: 'Nan !' },
        {
          text: 'Ouais !',
          handler: data => data.personaName ? this.personaService.addPersona(data.personaName) : false
        }
      ]
    });

    await alert.present();
  }

  exportFile() {
    this.fileService.exportFile();
  }

  importFile() {
    this.fileService.importFile();
  }

  async removePersonaAlert(persona: IPersona): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Supprimer un personnage',
      message: 'Etes vous sure de vouloir supprimer ce personnage ?',
      buttons: [
        { text: 'Nan !' },
        {
          text: 'Ouais !',
          handler: () => this.personaService.removePersona(persona)
        }
      ]
    });

    await alert.present();
  }
}
