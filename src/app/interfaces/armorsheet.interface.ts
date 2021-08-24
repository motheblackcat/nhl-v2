import { IEffect } from './effect.interface';

interface IArmor {
  name: string;
  pr: string;
  rup: string;
  equiped: boolean;
  effects: IEffect[];
}

export interface IArmorSheet {
  list: IArmor[];
  tdm: boolean;
}
