import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'food',
  templateUrl: 'food.html'
})
export class FoodComponent {
  food = [];

  constructor(private dataStorage: DataProvider) { }

  ngOnInit() {
    this.dataStorage.getData(this.food, 'foodData');
    this.dataStorage.clear.subscribe(() => {
      this.food = [];
    });
  }

  addItem(item: string) {
    // Check that the field get out of focus after entering the data
    this.dataStorage.addItem(item, this.food, 'foodData');
  }

  updateItem(item: string, value: string, array: Array<any>) {
    this.dataStorage.updateItem(item, value, this.food, 'foodData');
  }

  deleteItem(item) {
    this.dataStorage.deleteItem(item, this.food, 'foodData');
  }
}
