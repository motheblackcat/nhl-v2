import { IEffect } from './effect.interface';

export interface IWeapon {
  type: string;
  name: string;
  pi: string;
  rup: string;
  equiped: boolean;
  effects: IEffect[];
}
