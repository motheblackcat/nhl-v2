import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'precious',
  templateUrl: 'precious.html'
})
export class PreciousComponent {
  precious = [];

  constructor(private dataStorage: DataProvider) { }

  ngOnInit() {
    this.dataStorage.getData(this.precious, 'preciousData');
    this.dataStorage.clear.subscribe(() => {
      this.precious = [];
    });
  }

  addItem(item: string) {
    // Check that the field get out of focus after entering the data
    this.dataStorage.addItem(item, this.precious, 'preciousData');
  }

  updateItem(item: string, value: string, array: Array<any>) {
    this.dataStorage.updateItem(item, value, this.precious, 'preciousData');
  }

  deleteItem(item) {
    this.dataStorage.deleteItem(item, this.precious, 'preciousData');
  }
}
