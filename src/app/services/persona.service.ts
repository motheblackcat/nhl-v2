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

  /** TODO: currentPersonas update only once */
  updatePersonas(formName: string, personaSheet: PersonaSheet) {
    const newPersonaSheet: PersonaSheet = {};
    newPersonaSheet[formName] = personaSheet;

    const currentPersonas = this.personas$.value;
    const index = currentPersonas.indexOf(this.currentPersona);

    currentPersonas[index] = { ...currentPersonas[index], sheet: { ...newPersonaSheet } };

    console.log(currentPersonas[index]);

    this.personas$.next(currentPersonas);
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
    const updatedPersonas = this.personas$.value;
    updatedPersonas.splice(updatedPersonas.indexOf(persona), 1);
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }
}
