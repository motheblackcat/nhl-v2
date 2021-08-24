export class CharSheet {
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
