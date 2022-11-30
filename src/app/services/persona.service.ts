import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { PERSONA_KEY } from '../consts/persona-key.const';
import { IPersona, IPersonaSheet } from '../interfaces/persona.interface';
import { PersonaSheet } from '../models/persona.model';
import { TOASTER_COLOR, ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: IPersona[] = [];
  currentPersona: IPersona = null;

  constructor(private store: Storage, private toastService: ToastService) { }

  /**
   * Get personas data from local storage or create empty personas data in the storage.
  */
  getPersonas() {
    this.store.get(PERSONA_KEY)
      .then((data: IPersona[]) => {
        data ? this.personas = data : this.store.set(PERSONA_KEY, []);
      })
      .catch(err => this.toastService.showToast(`Une erreur s\'est produite: ${err}`, TOASTER_COLOR.DANGER));
  }

  /**
   * Add a new person to the personas list.
   * @param personaName the name of the new persona.
   */
  addPersona(personaName: string) {
    const newPersona: IPersona = { name: personaName, sheets: new PersonaSheet(personaName) };
    const updatedPersonas: IPersona[] = [...this.personas, newPersona];
    this.personas = [...updatedPersonas];
    this.store.set(PERSONA_KEY, this.personas);
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
    this.store.set(PERSONA_KEY, this.personas);
  }

  /**
   * Remove a character from the personas list
   * @param persona the character/persona to be removed
   */
  removePersona(persona: IPersona) {
    const updatedPersonas = this.personas;
    updatedPersonas.splice(updatedPersonas.indexOf(persona), 1);
    this.personas = [...updatedPersonas];
    this.store.set(PERSONA_KEY, this.personas);
  }

  /**
   * Helper function to sort label names in char and stats subsheets
   * @returns 0 so the order won't be changed
   */
  defaultOrder(): number {
    return 0;
  }
}
