import { IArmorSheet } from './armorsheet.interface';
import { IBagsSheet } from './bagsheet.interface';
import { ICampSheet } from './campsheet.interface';
import { ICharSheet } from './charsheet.interface';
import { IEffect } from './effect.interface';
import { IStatSheet } from './statsheet.interface';
import { IWeapon } from './weapons.interface';

export interface IPersona {
  name: string;
  sheets: IPersonaSheet;
}

export interface IPersonaSheet {
  char: ICharSheet;
  stats: IStatSheet;
  skills: string[];
  quest: string[];
  loot: string[];
  bags: IBagsSheet;
  camp: ICampSheet;
  food: string[];
  precious: string[];
  special: IEffect[];
  mounts: IEffect[];
  gems: IEffect[];
  potions: IEffect[];
  weapons: IWeapon[];
  armors: IArmorSheet;
}
