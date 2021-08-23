export interface IPersona {
  name: string;
  sheets: ISheets;
}

export interface IEffect {
  name: string;
  effect: string;
}

export interface IWeapon {
  name: string;
  pi: string;
  rup: string;
  equiped: boolean;
  effects: IEffect[];
}

export interface ISheets {
  char: ICharSheet;
  stats: IStatsSheet;
  skills: String[];
  quest: String[];
  loot: String[];
  bags: IBagsSheet;
  camp: ICampSheet;
  food: String[];
  precious: String[];
  special: IEffect[];
  gems: IEffect[];
  potions: IEffect[];
  weapons: IWeapon[];
  armors: IArmorSheet;
}

export interface ICharSheet {
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

export interface IStatsSheet {
  ev: IEffect;
  ea: IEffect;
  cou: IEffect;
  int: IEffect;
  cha: IEffect;
  ad: IEffect;
  fo: IEffect;
  atq: IEffect;
  prd: IEffect;
  magphy: number;
  magpsy: number;
  resmag: number;
}

interface IBag {
  name: string;
  max: string;
}

export interface IBagsSheet {
  max: string;
  bags: IBag[];
  pooches: IBag[];
}

interface ICamp {
  name: string;
  pv: string;
  h: string;
  wei: string;
}

interface ILightCamp {
  name: string;
  wei: string;
}

export interface ICampSheet {
  tente: ICamp;
  matelas: ICamp;
  couverture: ICamp;
  autres: ILightCamp[];
  totalWeight: number;
}

export interface IArmor {
  name: string;
  pr: string;
  rup: string;
  equiped: boolean;
  effects: IEffect[];
}

export interface IArmorSheet {
  list: IArmor[];
  tdm: boolean;
  prNat: number;
  prMag: number;
}
