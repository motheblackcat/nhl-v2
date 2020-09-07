import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Storage } from '@ionic/storage';

import { PERSONAS } from '../consts/storage.consts';

import { Persona } from '../interfaces/persona.interface';
import { PersonaSheet } from '../interfaces/persona-sheet.interface';

import { mainForm } from '../models/form';
import { personaSheetModel } from '../models/persona-sheet.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas$: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  currentPersona: Persona;
  constructor(private store: Storage, private fb: FormBuilder) {}

  getPersonas() {
    this.store.get(PERSONAS).then(data => {
      data ? this.personas$.next(data) : this.store.set(PERSONAS, []);
    });
  }

  updatePersonas(formName: string, personaSheet: PersonaSheet) {
    const currentPersonas = this.personas$.value;
    const currentPersona = currentPersonas.find(pers => pers === this.currentPersona);
    currentPersona.sheet[formName] = personaSheet;
    this.personas$.next(currentPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  addPersona(personaName: string) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newPersonaSheet = mainForm;
    newPersonaSheet.get('charForm').get('nom').setValue(personaName);
    const newPersona = { name: personaName, color: `#${randomColor}`, sheet: newPersonaSheet.value };
    const updatedPersonas = [...this.personas$.value, newPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  /** TODO: No immutability */
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
