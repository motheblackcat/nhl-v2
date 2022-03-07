import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { IPersona, IPersonaSheet } from '../interfaces/persona.interface';
import { PersonaSheet } from '../models/persona.model';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: IPersona[] = [];
  currentPersona: IPersona = null;
  personasKey = 'personas';

  constructor(private fileService: FileService, private store: Storage) { }

  /** 
   * Get personas data from local storage or create empty personas data.
   * Create a persona txt file with the file service
  */
  getPersonas() {
    this.store.get(this.personasKey)
      .then(data => {
        if (data) {
          this.personas = [...data]
          const personaData = JSON.stringify(this.personas);
          this.fileService.writeFile(personaData);
        } else {
          this.store.set(this.personasKey, [])
        }
      }).catch(err => console.error('ERROR TO RETREIVE DATA FROM LOCAL STORAGE', err));
  }

  addPersona(personaName: string) {
    const newPersona: IPersona = { name: personaName, sheets: new PersonaSheet(personaName) };
    const updatedPersonas: IPersona[] = [...this.personas, newPersona];
    this.personas = [...updatedPersonas];
    this.store.set(this.personasKey, this.personas);
  }

  updatePersonas(formName: string, personaSheet: IPersonaSheet) {
    const currentPersonas = this.personas;
    const currentPersona = currentPersonas.find(pers => pers === this.currentPersona);
    currentPersona.sheets[formName] = personaSheet;
    currentPersona.name = currentPersona.sheets['char'].nom;
    this.personas = [...currentPersonas];
    this.store.set(this.personasKey, this.personas);
  }

  removePersona(persona: IPersona) {
    const updatedPersonas = this.personas;
    updatedPersonas.splice(updatedPersonas.indexOf(persona), 1);
    this.personas = [...updatedPersonas];
    this.store.set(this.personasKey, this.personas);
  }

  defaultOrder(): number {
    return 0;
  }
}
