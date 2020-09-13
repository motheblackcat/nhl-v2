export interface Persona {
  name: string;
  sheet: PersonaSheetModel;
}

export interface EffectModel {
  name: string;
  effect: string;
}

export interface WeaponModel {
  name: string;
  pi: string;
  rup: string;
  equiped: boolean;
  effects: EffectModel[];
}

export interface PersonaSheetModel {
  char: CharSheetModel;
  stats: StatsSheetModel;
  skills: String[];
  quest: String[];
  loot: String[];
  bags: BagsSheetModel;
  camp: CampSheetModel;
  food: String[];
  precious: String[];
  special: EffectModel[];
  gems: EffectModel[];
  potions: EffectModel[];
  weapons: WeaponModel[];
  armors: ArmorSheetModel;
}

export interface CharSheetModel {
  niveau: string;
  pd: string;
  experience: string;
  nom: string;
  origine: string;
  metiers: string;
  sexe: string;
  berylium: string;
  thritil: string;
  or: string;
  argent: string;
  cuivre: string;
}

export interface StatsSheetModel {
  ev: EffectModel;
  ea: EffectModel;
  cou: EffectModel;
  int: EffectModel;
  cha: EffectModel;
  ad: EffectModel;
  fo: EffectModel;
  atq: EffectModel;
  prd: EffectModel;
  magphy: number;
  magpsy: number;
  resmag: number;
}

interface BagModel {
  name: string;
  max: string;
}

export interface BagsSheetModel {
  max: string;
  bags: BagModel[];
  pooches: BagModel[];
}

interface Camp {
  name: string;
  pv: string;
  h: string;
  wei: string;
}

interface LightCamp {
  name: string;
  wei: string;
}

export interface CampSheetModel {
  tentes: Camp;
  matelas: Camp;
  couvertures: Camp;
  autres: LightCamp[];
  totalWeight: number;
}

export interface ArmorModel {
  name: string;
  pr: string;
  rup: string;
  equiped: boolean;
  effects: EffectModel[];
}

export interface ArmorSheetModel {
  list: ArmorModel[];
  tdm: boolean;
  prNat: number;
  prMag: number;
}
