import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Storage } from '@ionic/storage';

import { PERSONAS } from '../consts/storage.consts';

import { Persona } from '../interfaces/persona.interface';
import { PersonaSheet } from '../interfaces/persona-sheet.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas$: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  currentPersona: Persona;
  constructor(private store: Storage) {}

  getPersonas() {
    this.store.get(PERSONAS).then(data => {
      this.personas$.next(data);
    });
  }

  updatePersonas(personaSheet: PersonaSheet) {
    const currentPersonas = this.personas$.value;
    currentPersonas.splice(currentPersonas.indexOf(this.currentPersona), 1);
    this.currentPersona = { ...this.currentPersona, sheet: personaSheet };
    const updatedPersonas = [...this.personas$.value, this.currentPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  addPersona(persona: Persona) {
    const updatedPersonas = [...this.personas$.value, persona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  /** TODO: Check if best practice are respected */
  removePersona(persona: Persona) {
    const currentPersonas = this.personas$.value;
    currentPersonas.splice(currentPersonas.indexOf(persona), 1);
    this.personas$.next(currentPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }
}
