import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Storage } from '@ionic/storage';

import { PERSONAS } from '../consts/storage.consts';

import { Persona } from '../interfaces/persona.interface';
import { PersonaSheet } from '../interfaces/persona-sheet.interface';
import { charForm } from '../models/charform';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas$: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  currentPersona: Persona;
  constructor(private store: Storage) {}

  getPersonas() {
    this.store.get(PERSONAS).then(data => {
      data ? this.personas$.next(data) : this.store.set(PERSONAS, []);
    });
  }

  /** TODO: Fix */
  updatePersonas(personaSheet: PersonaSheet) {
    const currentPersonas = this.personas$.value;
    currentPersonas.splice(currentPersonas.indexOf(this.currentPersona), 1);
    this.currentPersona = { ...this.currentPersona, sheet: personaSheet };
    const updatedPersonas = [...this.personas$.value, this.currentPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  addPersona(personaName: string) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newPersonaSheet = new FormGroup({ charForm: charForm });
    newPersonaSheet.get('charForm').get('nom').setValue(personaName);
    const newPersona = { name: personaName, color: `#${randomColor}`, sheet: newPersonaSheet.value };
    const updatedPersonas = [...this.personas$.value, newPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  removePersona(persona: Persona) {
    const currentPersonas = this.personas$.value;
    currentPersonas.splice(currentPersonas.indexOf(persona), 1);
    this.personas$.next(currentPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }
}
