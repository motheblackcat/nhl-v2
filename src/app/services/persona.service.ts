import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';

import { PERSONAS } from '../consts/storage.consts';

import { ArmorSheet, PersonaSheet } from '../models/persona.model';

import { BagsSheetModel, CampSheetModel, Persona, PersonaSheetModel, StatsSheetModel, WeaponModel } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas$: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  currentPersona: Persona;
  constructor(private store: Storage) {}

  getLegacyPersona(data: any) {
    if (data) {
      const stats = {};
      for (const stat in data.statsForm) {
        if (stat === 'magphy' || stat === 'magpsy' || stat === 'resmag') {
          stats[stat] = data.statsForm[stat];
        } else {
          stats[stat] = { name: data.statsForm[stat].val, effect: data.statsForm[stat].ef ? String(data.statsForm[stat].ef) : '' };
        }
      }

      const weapons: WeaponModel[] = [];
      for (const weapon in data.weaponsForm) {
        if (weapon) {
          weapons.push({
            name: data.weaponsForm[weapon].name,
            pi: data.weaponsForm[weapon].pi,
            rup: data.weaponsForm[weapon].rup,
            equiped: data.weaponsForm[weapon].equ,
            effects: []
          });

          data.weaponsForm[weapon].ef.forEach(effect => {
            if (effect.name) {
              weapons.find(wea => wea.name === data.weaponsForm[weapon].name).effects.push({ name: effect.name, effect: effect.val });
            }
          });
        }
      }

      const armors: ArmorSheet = { list: [], tdm: false, prNat: 0, prMag: 0 };
      for (const armor in data.armorsForm) {
        if (armor !== 'tdm' && armor !== 'prmag') {
          armors.list.push({
            name: data.armorsForm[armor].name,
            pr: data.armorsForm[armor].pr,
            rup: data.armorsForm[armor].rup,
            equiped: data.armorsForm[armor].equ,
            effects: []
          });

          data.armorsForm[armor].ef.forEach(effect => {
            if (effect.name) {
              armors.list.find(arm => arm.name === data.armorsForm[armor].name).effects.push({ name: effect.name, effect: effect.val });
            }
          });
        }
      }

      /** TODO: Can be refactored with a single loop on bags/pooches */
      const bags: BagsSheetModel = { max: data.bagsForm.max, bags: [], pooches: [] };
      for (const bag in data.bagsForm['bags']) {
        if (bag) {
          bags.bags.push({ name: data.bagsForm['bags'][bag].name, max: data.bagsForm['bags'][bag].max });
        }
      }
      for (const pooch in data.bagsForm['pooches']) {
        if (pooch) {
          bags.pooches.push({ name: data.bagsForm['pooches'][pooch].name, max: data.bagsForm['pooches'][pooch].max });
        }
      }

      const camp: CampSheetModel = {
        tente: data.campForm.tente,
        matelas: data.campForm.matelas,
        couverture: data.campForm.couverture,
        autres: [],
        totalWeight: 0
      };
      for (const autre in data.campForm['mat']) {
        if (autre) {
          camp.autres.push(data.campForm['mat'][autre]);
        }
      }

      const newPersona: Persona = { name: data.charForm.nom, sheet: new PersonaSheet(data.charForm.nom) };
      newPersona.sheet = {
        ...newPersona.sheet,
        char: data.charForm,
        stats: stats as StatsSheetModel,
        skills: data.skillsForm,
        quest: data.questForm,
        loot: data.lootForm,
        food: data.foodForm,
        precious: data.preciousForm,
        bags,
        camp,
        special: data.specialForm,
        gems: data.gemsForm,
        potions: data.potionsForm,
        weapons,
        armors
      };
      const updatedPersonas: Persona[] = [...this.personas$.value, newPersona];
      this.personas$.next(updatedPersonas);
      this.store.set(PERSONAS, this.personas$.value);
      this.store.remove('mainForm');
    }
  }

  getPersonas() {
    this.store.get('mainForm').then(form => {
      this.getLegacyPersona(form);
    });

    this.store.get(PERSONAS).then(data => {
      data ? this.personas$.next(data) : this.store.set(PERSONAS, []);
    });
  }

  addPersona(personaName: string) {
    const newPersona: Persona = { name: personaName, sheet: new PersonaSheet(personaName) };
    const updatedPersonas: Persona[] = [...this.personas$.value, newPersona];
    this.personas$.next(updatedPersonas);
    this.store.set(PERSONAS, this.personas$.value);
  }

  updatePersonas(formName: string, personaSheet: PersonaSheetModel) {
    const currentPersonas = this.personas$.value;
    const currentPersona = currentPersonas.find(pers => pers === this.currentPersona);
    currentPersona.sheet[formName] = personaSheet;
    currentPersona.name = currentPersona.sheet['char'].nom;
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
