import { IArmorSheet } from './armorsheet.interface';
import { IBagsSheet } from './bagsheet.interface';
import { ICampSheet } from './campsheet.interface';
import { ICharSheet } from './charsheet.interface';
import { IEffect } from './effect.interface';
import { IStatSheet } from './statsheet.interface';
import { IWeapon } from './weapons.interface';

/** 
 * Represents one character
 * @member name: the name used in the persona list
 * @member sheets: contain all the persona's sheets
 */
export interface IPersona {
  name: string;
  sheets: IPersonaSheet;
}

/**
 * Container for all the subsheets interfaces
 */
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
