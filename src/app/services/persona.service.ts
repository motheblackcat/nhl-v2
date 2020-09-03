import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Storage } from '@ionic/storage';

import { PERSONAS } from '../consts/storage.consts';

import { Persona } from '../interfaces/persona.interface';

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

  /** TODO: Pass name to the persona's sheet */
  addPersona(persona: Persona) {
    const updatedPersonas = [...this.personas$.value, persona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  /** TODO: Check it best practice are respected */
  removePersona(persona: Persona) {
    const currentPersonas = this.personas$.value;
    currentPersonas.splice(currentPersonas.indexOf(persona), 1);
    this.personas$.next(currentPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  updatePersona(persona: Persona) {}
}
