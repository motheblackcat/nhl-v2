import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { PERSONAS } from '../consts/storage.consts';
import { IPersona, ISheets } from '../interfaces/persona.interface';
import { PersonaSheet } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas$: BehaviorSubject<IPersona[]> = new BehaviorSubject<IPersona[]>([]);
  currentPersona: IPersona;
  constructor(private store: Storage) { }

  getPersonas() {
    this.store.get(PERSONAS).then(data => {
      data ? this.personas$.next(data) : this.store.set(PERSONAS, []);
    });
  }

  addPersona(personaName: string) {
    const newPersona: IPersona = { name: personaName, sheets: new PersonaSheet(personaName) };
    const updatedPersonas: IPersona[] = [...this.personas$.value, newPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  updatePersonas(formName: string, personaSheet: ISheets) {
    const currentPersonas = this.personas$.value;
    const currentPersona = currentPersonas.find(pers => pers === this.currentPersona);
    currentPersona.sheets[formName] = personaSheet;
    currentPersona.name = currentPersona.sheets['char'].nom;
    this.personas$.next(currentPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  removePersona(persona: IPersona) {
    const updatedPersonas = this.personas$.value;
    updatedPersonas.splice(updatedPersonas.indexOf(persona), 1);
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  defaultOrder(): number {
    return 0;
  }
}
