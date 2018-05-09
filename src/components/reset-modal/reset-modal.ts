import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'reset-modal',
  templateUrl: 'reset-modal.html'
})
export class ResetModalComponent {
  constructor(public dataService: DataProvider, public viewCtrl: ViewController) { }

}
