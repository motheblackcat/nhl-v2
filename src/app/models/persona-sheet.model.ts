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
  val: string;
  ef: number;

  constructor() {
    this.val = '';
    this.ef = 0;
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

export class PersonaSheet {
  char: CharSheet;
  stats: StatsSheet;

  constructor(nom: string) {
    this.char = new CharSheet(nom);
    this.stats = new StatsSheet();
  }
}

// skills: [],
// weapons: [],
// armors: [],
// quest: [],
// loot: [],
// food: [],
// special: [],
// gems: [],
// potions: [],
// precious: []

// bags: {
//   max: '',
//   bags: [
//     {
//       name: '',
//       max: ''
//     }
//   ],
//   pooches: [
//     {
//       name: '',
//       max: ''
//     }
//   ]
// },
// camp: {
//   tente: {
//     name: '',
//     pv: '',
//     h: '',
//     wei: ''
//   },
//   matelas: {
//     name: '',
//     pv: '',
//     h: '',
//     wei: ''
//   },
//   couverture: {
//     name: '',
//     pv: '',
//     h: '',
//     wei: ''
//   },
//   mat: [
//     {
//       name: '',
//       wei: ''
//     }
//   ]
// },

// weapons: {
//   wea1: {
//     name: '',
//     pi: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   wea2: {
//     name: '',
//     pi: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   },
//   wea3: {
//     name: '',
//     pi: '',
//     rup: '',
//     equ: '',
//     ef: [
//       {
//         name: '',
//         val: ''
//       }
//     ]
//   }
// },
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
