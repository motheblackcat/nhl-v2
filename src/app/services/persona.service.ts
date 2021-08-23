import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { PERSONAS } from '../consts/storage.consts';
import { Persona, PersonaSheetModel } from '../interfaces/persona.interface';
import { PersonaSheet } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas$: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  currentPersona: Persona;
  constructor(private store: Storage) { }

  getPersonas() {
    this.store.get(PERSONAS).then(data => {
      data ? this.personas$.next(data) : this.store.set(PERSONAS, []);
    });
  }

  addPersona(personaName: string) {
    const newPersona: Persona = { name: personaName, sheets: new PersonaSheet(personaName) };
    const updatedPersonas: Persona[] = [...this.personas$.value, newPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  updatePersonas(formName: string, personaSheet: PersonaSheetModel) {
    const currentPersonas = this.personas$.value;
    const currentPersona = currentPersonas.find(pers => pers === this.currentPersona);
    currentPersona.sheets[formName] = personaSheet;
    currentPersona.name = currentPersona.sheets['char'].nom;
    this.personas$.next(currentPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  removePersona(persona: Persona) {
    const updatedPersonas = this.personas$.value;
    updatedPersonas.splice(updatedPersonas.indexOf(persona), 1);
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  defaultOrder(): number {
    return 0;
  }
}
