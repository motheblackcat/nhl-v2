export interface Persona {
  name: string;
  sheet: PersonaSheetModel;
}

/** TODO: Should have interfaces */
export interface PersonaSheetModel {
  char: CharSheetModel;
  stats: StatsSheetModel;
  skills: String[];
  quest: String[];
  loot: String[];
  bags: BagsSheetModel;
  food: String[];
  precious: String[];
}

// weapons: Object[];
// armors: Object[];
// camp: Object;
// special: Object[];
// gems: Object[];
// potions: Object[];

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

export interface EffectModel {
  val: string;
  ef: number;
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

export interface BagModel {
  name: string;
  max: string;
}

export interface BagsSheetModel {
  max: string;
  bags: BagModel[];
  pooches: BagModel[];
}
