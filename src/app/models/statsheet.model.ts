import { Effect } from './effect.model';

export class StatSheet {
  ev: Effect;
  ea: Effect;
  cou: Effect;
  int: Effect;
  cha: Effect;
  ad: Effect;
  fo: Effect;
  atq: Effect;
  prd: Effect;

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
  }
}
