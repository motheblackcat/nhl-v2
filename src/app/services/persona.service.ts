import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { IPersona, IPersonaSheet } from '../interfaces/persona.interface';
import { PersonaSheet } from '../models/persona.model';
import { FileService } from './file.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: IPersona[] = [];
  currentPersona: IPersona = null;
  personasKey = 'personas';

  constructor(private fileService: FileService, private store: Storage, private toastService: ToastService) { }

  /**
   * Get personas data from local storage or create empty personas data.
   * Additionally create a persona txt file with the file service.
  */
  getPersonas() {
    this.store.get(this.personasKey)
      .then(data => {
        if (data) {
          this.personas = [...data]
          const personaData = JSON.stringify(this.personas);
          this.fileService.writeFile(personaData);
          this.toastService.showToast('Un fichier texte des personnages a été crée en cas de pépin !');
        } else {
          this.store.set(this.personasKey, [])
        }
      }).catch(err => this.toastService.showToast(`Une erreur s\'est produite: ${err}`));
  }

  /**
   * Add a new person to the personas list.
   * @param personaName the name of the new persona.
   */
  addPersona(personaName: string) {
    const newPersona: IPersona = { name: personaName, sheets: new PersonaSheet(personaName) };
    const updatedPersonas: IPersona[] = [...this.personas, newPersona];
    this.personas = [...updatedPersonas];
    this.store.set(this.personasKey, this.personas);
  }

  /**
   * Update the current persona
   * @param formName name of the subsheet to update
   * @param formValue object to be used to update the subsheet
   */
  updatePersonas(formName: string, formValue: IPersonaSheet) {
    const currentPersonas = this.personas;
    const currentPersona = currentPersonas.find(pers => pers === this.currentPersona);
    currentPersona.sheets[formName] = formValue;
    currentPersona.name = currentPersona.sheets['char'].nom;
    this.personas = [...currentPersonas];
    this.store.set(this.personasKey, this.personas);
  }

  /**
   * Remove a character from the personas list
   * @param persona the character/persona to be removed
   */
  removePersona(persona: IPersona) {
    const updatedPersonas = this.personas;
    updatedPersonas.splice(updatedPersonas.indexOf(persona), 1);
    this.personas = [...updatedPersonas];
    this.store.set(this.personasKey, this.personas);
  }

  /**
   * Helper function to sort label names in char and stats subsheets
   * @returns 0 so the order won't be changed
   */
  defaultOrder(): number {
    return 0;
  }
}
