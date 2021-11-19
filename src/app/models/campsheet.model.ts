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

export class CampSheet {
  tente: Camp;
  matelas: Camp;
  couverture: Camp;
  autres: LightCamp[];
  totalWeight: number;

  constructor() {
    this.tente = new Camp();
    this.matelas = new Camp();
    this.couverture = new Camp();
    this.autres = [];
    this.totalWeight = 0;
  }
}
