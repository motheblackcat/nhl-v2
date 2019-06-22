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
    ev: new FormControl(),
    ea: new FormControl(),
    cou: new FormControl(),
    int: new FormControl(),
    cha: new FormControl(),
    ad: new FormControl(),
    fo: new FormControl(),
    atq: new FormControl(),
    prd: new FormControl(),
    magphy: new FormControl(0),
    magpsy: new FormControl(0),
    resmag: new FormControl(0)
  }),
  skillsForm: new FormArray([]),
  weaponsForm: new FormGroup({}),
  armorsForm: new FormGroup({}),
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
    tent: new FormGroup({
      name: new FormControl(),
      pv: new FormControl(),
      h: new FormControl(),
      wei: new FormControl()
    }),
    mat: new FormGroup({
      name: new FormControl(),
      pv: new FormControl(),
      h: new FormControl(),
      wei: new FormControl()
    }),
    blan: new FormGroup({
      name: new FormControl(),
      pv: new FormControl(),
      h: new FormControl(),
      wei: new FormControl()
    })
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
