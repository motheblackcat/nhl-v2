import { PersonaSheet } from '../interfaces/persona-sheet.interface';

export const personaSheetModel: PersonaSheet = {
  char: {
    niveau: '',
    pd: '',
    experience: '',
    nom: '',
    origine: '',
    metiers: '',
    sexe: '',
    berylium: '',
    thritil: '',
    or: '',
    argent: '',
    cuivre: ''
  },
  stats: {
    ev: { val: '', ef: 0 },
    ea: { val: '', ef: 0 },
    cou: { val: '', ef: 0 },
    int: { val: '', ef: 0 },
    cha: { val: '', ef: 0 },
    ad: { val: '', ef: 0 },
    fo: { val: '', ef: 0 },
    atq: { val: '', ef: 0 },
    prd: { val: '', ef: 0 },
    magphy: 0,
    magpsy: 0,
    resmag: 0
  },
  skills: [],
  weapons: [],
  armors: [],
  quest: [],
  loot: [],
  bags: {
    max: '',
    bags: [
      {
        name: '',
        max: ''
      }
    ],
    pooches: [
      {
        name: '',
        max: ''
      }
    ]
  },
  camp: {
    tente: {
      name: '',
      pv: '',
      h: '',
      wei: ''
    },
    matelas: {
      name: '',
      pv: '',
      h: '',
      wei: ''
    },
    couverture: {
      name: '',
      pv: '',
      h: '',
      wei: ''
    },
    mat: [
      {
        name: '',
        wei: ''
      }
    ]
  },
  food: [],
  special: [],
  gems: [],
  potions: [],
  precious: []
};

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
