class CharSheet {
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

  constructor(nom: string) {
    this.niveau = '';
    this.pd = '';
    this.experience = '';
    this.nom = nom;
    this.origine = '';
    this.metiers = '';
    this.sexe = '';
    this.berylium = '';
    this.thritil = '';
    this.or = '';
    this.argent = '';
    this.cuivre = '';
  }
}

class Effect {
  name: string;
  effect: string;

  constructor() {
    this.name = '';
    this.effect = '';
  }
}

class StatsSheet {
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

  constructor() {
    this.ev = new Effect();
    this.ea = new Effect();
    this.cou = new Effect();
    this.int = new Effect();
    this.cha = new Effect();
    this.ad = new Effect();
    this.fo = new Effect();
    this.atq = new Effect();
    this.prd = new Effect();
    this.magphy = 0;
    this.magpsy = 0;
    this.resmag = 0;
  }
}

class Bag {
  name: string;
  max: string;

  constructor() {
    this.name = '';
    this.max = '';
  }
}

class BagsSheet {
  max: string;
  bags: Bag[];
  pooches: Bag[];

  constructor() {
    this.max = '';
    this.bags = [];
    this.pooches = [];
  }
}

class LightCamp {
  name: string;
  wei: string;

  constructor() {
    this.name = '';
    this.wei = '';
  }
}
class Camp {
  name: string;
  wei: string;
  pv: string;
  h: string;

  constructor() {
    this.name = '';
    this.wei = '';
    this.pv = '';
    this.h = '';
  }
}

class CampSheet {
  tentes: Camp;
  matelas: Camp;
  couvertures: Camp;
  autres: LightCamp[];

  constructor() {
    this.tentes = new Camp();
    this.matelas = new Camp();
    this.couvertures = new Camp();
    this.autres = [];
  }
}

export class Weapon {
  name: string;
  pi: string;
  rup: string;
  equiped: boolean;
  effects: Effect[];

  constructor() {
    this.name = '';
    this.pi = '';
    this.rup = '';
    this.equiped = false;
    this.effects = [];
  }
}

export class PersonaSheet {
  char: CharSheet;
  stats: StatsSheet;
  skills: String[];
  quest: String[];
  loot: String[];
  food: String[];
  precious: String[];
  bags: BagsSheet;
  camp: CampSheet;
  special: Effect[];
  gems: Effect[];
  potions: Effect[];
  weapons: Weapon[];

  constructor(nom: string) {
    this.char = new CharSheet(nom);
    this.stats = new StatsSheet();
    this.skills = [];
    this.quest = [];
    this.loot = [];
    this.food = [];
    this.precious = [];
    this.bags = new BagsSheet();
    this.camp = new CampSheet();
    this.special = [];
    this.gems = [];
    this.potions = [];
    this.weapons = [];
  }
}

// armors: {
//   tete: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   torse: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   bouclier: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   bras: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   mains: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   jambes: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   pieds: {
//     name: '',
//     pr: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   tdm: '',
//   prmag: ''
// },
