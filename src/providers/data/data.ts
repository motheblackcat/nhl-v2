import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataProvider {
  checked: boolean;
  input: string;
  clear = new Subject<void>();

  constructor() { }
  
  clearData() {
    localStorage.clear();
    this.clear.next();
  }

  storeData(key: string, data: Array<object>) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(array: Array<any>, dataKey: string) {
    const data = JSON.parse(localStorage.getItem(dataKey));
    if (data !== null) {
      data.forEach(field => {
        if (data.length > array.length) {
          array.push(field);
        }
      });
    }
  }

  addItem(item: string, array: Array<any>, key: string) {
    if (item.match(/[a-zA-Z]+/g)) {
      array.push(item);
      this.storeData(key, array);
      this.input = '';
    }
  }

  updateItem(skill: string, value: string, array: Array<any>, key: string) {
    const index = array.indexOf(skill);
    array[index] = value;
    this.storeData(key, array);
  }

  deleteItem(item: string, array: Array<any>, key: string) {
    array.splice(array.indexOf(item), 1);
    this.storeData(key, array);
  }
}
