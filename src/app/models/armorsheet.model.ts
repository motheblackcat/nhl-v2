import { Effect } from './effect.model';

export class Armor {
  type: string;
  name: string;
  pr: string;
  rup: string;
  equiped: boolean;
  effects: Effect[];

  constructor(type?: string) {
    this.type = type ? type : '';
    this.name = '';
    this.pr = '';
    this.rup = '';
    this.equiped = false;
    this.effects = [];
  }
}

export class ArmorSheet {
  list: Armor[];
  tdm: boolean;

  constructor() {
    this.list = [];
    this.tdm = false;
  }
}
