import { ArmorSheet } from './armorsheet.model';
import { BagsSheet } from './bagsheet.model';
import { CampSheet } from './campsheet.model';
import { CharSheet } from './charsheet.model';
import { Effect } from './effect.model';
import { StatSheet } from './statsheet.model';
import { Weapon } from './weapon.model';

export class PersonaSheet {
  char: CharSheet;
  stats: StatSheet;
  skills: string[];
  quest: string[];
  loot: string[];
  food: string[];
  precious: string[];
  bags: BagsSheet;
  camp: CampSheet;
  special: Effect[];
  mounts: Effect[];
  gems: Effect[];
  potions: Effect[];
  weapons: Weapon[];
  armors: ArmorSheet;

  constructor(nom: string) {
    this.char = new CharSheet(nom);
    this.stats = new StatSheet();
    this.skills = [];
    this.quest = [];
    this.loot = [];
    this.food = [];
    this.precious = [];
    this.bags = new BagsSheet();
    this.camp = new CampSheet();
    this.special = [];
    this.mounts = [];
    this.gems = [];
    this.potions = [];
    this.weapons = [];
    this.armors = new ArmorSheet();
  }
}
