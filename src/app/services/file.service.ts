





import { Injectable } from '@angular/core';
import {
    Directory, Encoding, Filesystem, ReadFileResult, WriteFileResult
} from '@capacitor/filesystem';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { PERSONA_KEY } from '../consts/persona-key.const';
import { IPersona } from '../interfaces/persona.interface';
import { PersonaService } from './persona.service';
import { TOASTER_COLOR, ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  path = 'nhl-personas.txt';
  directory = Directory.Documents;

  constructor(
    private toastService: ToastService,
    private alertCtrl: AlertController,
    private store: Storage,
    private personaService: PersonaService
  ) { }

  /**
   * Create a text file with the capacitor Filesystem from the Storage
   * @returns Promise with the type WriteFileResult
   */
  private async writeFile(): Promise<WriteFileResult> {
    const data = JSON.stringify(await this.store.get(PERSONA_KEY));

    return Filesystem.writeFile({
      path: this.path,
      data,
      directory: this.directory,
      encoding: Encoding.UTF8
    });
  };

  /**
   * Read an existing file with the capacitor Filesystem from the Storage
   * @returns Promise with the type ReadFileResult
   */
  private readFile(): Promise<ReadFileResult> {
    return Filesystem.readFile({
      path: this.path,
      directory: this.directory,
      encoding: Encoding.UTF8
    });
  }

  /**
   * TODO: Move to menu
   * Helper function called by component to check for existing file and write it
   */
  async exportFile(): Promise<void> {
    this.readFile()
      .then(async (readFileResult: ReadFileResult) => {
        const alert = await this.alertCtrl.create({
          header: 'Des données existent déjà !',
          message: 'Etes vous sure de vouloir écraser les données existantes ?',
          buttons: [
            { text: 'Nan !' },
            {
              text: 'Ouais !',
              handler: async () => {
                const writeFileResult = await this.writeFile();
                this.toastService.showToast(`Les données on été enregistrées au format txt dans le dossier ${this.directory.toLocaleLowerCase()} !`, TOASTER_COLOR.SUCCESS);
              }
            }
          ]
        });

        await alert.present();
      })
      .catch(async (err: Error) => {
        const writeFileResult = await this.writeFile();
        this.toastService.showToast(`Les données on été enregistrées au format txt dans le dossier ${this.directory.toLocaleLowerCase()} !`, TOASTER_COLOR.SUCCESS);
      });
  }

  /**
   * TODO: Move to menu
   * Helper function called by component to check for existing file and add it to the storage
   */
  async importFile(): Promise<void> {
    this.readFile()
      .then(async (readFileResult: ReadFileResult) => {
        const filePersonas: IPersona[] = JSON.parse(readFileResult.data);
        const storagePersonas: IPersona[] = await this.store.get(PERSONA_KEY);
        let combinedPersonas: IPersona[] = [...storagePersonas];

        if (!storagePersonas.length) {
          combinedPersonas = [...filePersonas];
          this.toastService.showToast(`Les personnages du fichier txt on été importés !`, TOASTER_COLOR.SUCCESS);
        } else {
          filePersonas.forEach((filePersona: IPersona) => {
            storagePersonas.forEach((storagePersona: IPersona) => {
              if (filePersona.name !== storagePersona.name) {
                combinedPersonas.push(filePersona);
                this.toastService.showToast(`Les personnages du fichier txt on été importés !`, TOASTER_COLOR.SUCCESS);
              } else {
                this.toastService.showToast(`Pas de nouveaux personnages à importer !`, TOASTER_COLOR.WARNING);
              }
            })
          });
        }
        this.personaService.personas = combinedPersonas;
        this.store.set(PERSONA_KEY, combinedPersonas);
      })
      .catch((err: Error) => this.toastService.showToast(`Il n'y a pas de fichier à importer !`, TOASTER_COLOR.DANGER));
  }

  /**
   * TODO: Create a formated text file with all personas
   */
  // async createPersonaSheets() {
  //   const readFileResult = await this.readFile();
  //   const readFileResultOject: IPersona[] = JSON.parse(readFileResult.data);
  //   const formatedText = `Nom: ${readFileResultOject[0].name}`;
  // }

  /**
   * TODO: Create a text file and trigger download for browsers without capacitor FileSystem
   */
  // exportBrowserFile(data: any) {
  //   // Create a link and set the URL using `createObjectURL`
  //   const file = new File([JSON.stringify(data)], 'nhl.txt');
  //   const link = document.createElement("a");
  //   link.style.display = "none";
  //   link.href = URL.createObjectURL(file);
  //   link.download = file.name;

  //   // It needs to be added to the DOM so it can be clicked
  //   document.body.appendChild(link);
  //   link.click();

  //   // To make this work on Firefox we need to wait a little while before removing it.
  //   setTimeout(() => {
  //     URL.revokeObjectURL(link.href);
  //     link.parentNode.removeChild(link);
  //   }, 0);
  // }
}
