import { Effect } from './effect.model';

export class Weapon {
  type: string;
  name: string;
  pi: string;
  rup: string;
  equiped: boolean;
  effects: Effect[];

  constructor(type?: string) {
    this.type = type ? type : '';
    this.name = '';
    this.pi = '';
    this.rup = '';
    this.equiped = false;
    this.effects = [];
  }
}
