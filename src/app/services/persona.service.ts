import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { IPersona, IPersonaSheet } from '../interfaces/persona.interface';
import { PersonaSheet } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: IPersona[] = [];
  currentPersona: IPersona = null;
  personasKey = 'personas';
  constructor(private store: Storage) { }

  getPersonas() {
    this.store.get(this.personasKey)
      .then(data => data ? this.personas = [...data] : this.store.set(this.personasKey, []));
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
