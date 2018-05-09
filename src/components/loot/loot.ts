import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'loot',
  templateUrl: 'loot.html'
})
export class LootComponent {
  loots = [];
  constructor(private dataStorage: DataProvider) { }

  ngOnInit() {
    this.dataStorage.getData(this.loots, 'lootData');
    this.dataStorage.clear.subscribe(() => {
      this.loots = [];
    });
  }

  addItem(item: string) {
    // Check that the field get out of focus after entering the data
    this.dataStorage.addItem(item, this.loots, 'lootData');
  }

  updateItem(item: string, value: string, array: Array<any>) {
    this.dataStorage.updateItem(item, value, this.loots, 'lootData');
  }

  deleteItem(item) {
    this.dataStorage.deleteItem(item, this.loots, 'lootData');
  }
}
