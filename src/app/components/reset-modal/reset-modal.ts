import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'reset-modal',
  templateUrl: 'reset-modal.html'
})
export class ResetModalComponent {
  constructor(public dataService: DataService, public viewCtrl: ViewController) { }

}
