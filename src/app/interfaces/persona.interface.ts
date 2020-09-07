export interface Persona {
  name: string;
  sheet: PersonaSheetModel;
}

/** TODO: Should have interfaces */
export interface PersonaSheetModel {
  char: CharSheetModel;
  stats: StatsSheetModel;
  // skills: String[];
  // weapons: Object[];
  // armors: Object[];
  // quest: String[];
  // loot: String[];
  // bags: Object;
  // camp: Object;
  // food: String[];
  // special: Object[];
  // gems: Object[];
  // potions: Object[];
  // precious: String[];
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

export interface Effect {
  val: string;
  ef: number;
}

export interface StatsSheetModel {
  ev: Effect;
  ea: Effect;
  cou: Effect;
  int: Effect;
  cha: Effect;
  ad: Effect;
  fo: Effect;
  atq: Effect;
  prd: Effect;
  magphy: number;
  magpsy: number;
  resmag: number;
}
