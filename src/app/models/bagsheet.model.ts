class Bag {
  name: string;
  max: string;

  constructor() {
    this.name = '';
    this.max = '';
  }
}

export class BagsSheet {
  max: string;
  bags: Bag[];
  pooches: Bag[];

  constructor() {
    this.max = '';
    this.bags = [];
    this.pooches = [];
  }
}
