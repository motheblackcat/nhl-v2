import { FormGroup, FormControl, FormArray } from '@angular/forms';

export const mainForm = new FormGroup({
  charForm: new FormGroup({
    niveau: new FormControl(),
    pd: new FormControl(),
    experience: new FormControl(),
    nom: new FormControl(),
    origine: new FormControl(),
    metiers: new FormControl(),
    sexe: new FormControl(),
    berylium: new FormControl(),
    thritil: new FormControl(),
    or: new FormControl(),
    argent: new FormControl(),
    cuivre: new FormControl()
  }),
  statsForm: new FormGroup({
    ev: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    ea: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    cou: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    int: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    cha: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    ad: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    fo: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    atq: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    prd: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
    magphy: new FormControl(0),
    magpsy: new FormControl(0),
    resmag: new FormControl(0)
  }),
  skillsForm: new FormArray([]),
  weaponsForm: new FormGroup({
    wea1: new FormGroup({
      name: new FormControl(),
      pi: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([
        new FormGroup({
          name: new FormControl(),
          val: new FormControl()
        })
      ])
    }),
    wea2: new FormGroup({
      name: new FormControl(),
      pi: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    wea3: new FormGroup({
      name: new FormControl(),
      pi: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    })
  }),
  armorsForm: new FormGroup({
    tete: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([
        new FormGroup({
          name: new FormControl(),
          val: new FormControl()
        })
      ])
    }),
    torse: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    bouclier: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    bras: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    mains: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    jambes: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    pieds: new FormGroup({
      name: new FormControl(),
      pr: new FormControl(),
      rup: new FormControl(),
      equ: new FormControl(),
      ef: new FormArray([])
    }),
    tdm: new FormControl(),
    prmag: new FormControl()
  }),
  questForm: new FormArray([]),
  lootForm: new FormArray([]),
  bagsForm: new FormGroup({
    max: new FormControl(),
    bags: new FormArray([
      new FormGroup({
        name: new FormControl(),
        max: new FormControl()
      })
    ]),
    pooches: new FormArray([
      new FormGroup({
        name: new FormControl(),
        max: new FormControl()
      })
    ])
  }),
  campForm: new FormGroup({
    tente: new FormGroup({
      name: new FormControl(),
      pv: new FormControl(),
      h: new FormControl(),
      wei: new FormControl()
    }),
    matelas: new FormGroup({
      name: new FormControl(),
      pv: new FormControl(),
      h: new FormControl(),
      wei: new FormControl()
    }),
    couverture: new FormGroup({
      name: new FormControl(),
      pv: new FormControl(),
      h: new FormControl(),
      wei: new FormControl()
    }),
    mat: new FormArray([
      new FormGroup({
        name: new FormControl(),
        wei: new FormControl()
      })
    ])
  }),
  foodForm: new FormArray([]),
  specialForm: new FormArray([
    new FormGroup({
      name: new FormControl(),
      effect: new FormControl()
    })
  ]),
  gemsForm: new FormArray([
    new FormGroup({
      name: new FormControl(),
      effect: new FormControl()
    })
  ]),
  potionsForm: new FormArray([
    new FormGroup({
      name: new FormControl(),
      effect: new FormControl()
    })
  ]),
  preciousForm: new FormArray([])
});
