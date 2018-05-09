import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'quest',
  templateUrl: 'quest.html'
})
export class QuestComponent {
  inventory: Array<string> = [];

  constructor(private dataStorage: DataProvider) { }

  ngOnInit() {
    this.dataStorage.getData(this.inventory, 'questData');
    this.dataStorage.clear.subscribe(() => {
      this.inventory = [];
    });
  }

  addItem(item: string) {
    // Check that the field get out of focus after entering the data
    this.dataStorage.addItem(item, this.inventory, 'questData');
  }

  updateItem(item: string, value: string, array: Array<any>) {
    this.dataStorage.updateItem(item, value, this.inventory, 'questData');
  }

  deleteItem(item) {
    this.dataStorage.deleteItem(item, this.inventory, 'questData');
  }
}
