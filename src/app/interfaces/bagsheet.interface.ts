interface IBag {
  name: string;
  max: string;
}

export interface IBagsSheet {
  max: string;
  bags: IBag[];
  pooches: IBag[];
}
