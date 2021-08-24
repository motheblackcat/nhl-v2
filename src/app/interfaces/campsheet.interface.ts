interface ICamp {
  name: string;
  pv: string;
  h: string;
  wei: string;
}

interface ILightCamp {
  name: string;
  wei: string;
}

export interface ICampSheet {
  tente: ICamp;
  matelas: ICamp;
  couverture: ICamp;
  autres: ILightCamp[];
  totalWeight: number;
}
