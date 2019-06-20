import { FormGroup, FormControl } from '@angular/forms';

export const mainForm = new FormGroup({
  charForm: new FormGroup({
    niveau: new FormControl(''),
    point_de_destin: new FormControl(''),
    experience: new FormControl(''),
    nom: new FormControl(''),
    origine: new FormControl(''),
    metiers: new FormControl(''),
    sexe: new FormControl(''),
    berylium: new FormControl(''),
    thritil: new FormControl(''),
    or: new FormControl(''),
    argent: new FormControl(''),
    cuivre: new FormControl('')
  }),
  statsForm: new FormGroup({
    energie_vitale: new FormControl(0),
    energie_astral: new FormControl(0),
    cou: new FormControl(0),
    int: new FormControl(0),
    cha: new FormControl(0),
    ad: new FormControl(0),
    fo: new FormControl(0),
    atq: new FormControl(0),
    prd: new FormControl(0)
  })
});
