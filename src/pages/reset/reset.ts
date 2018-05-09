import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { ResetModalComponent } from '../../components/reset-modal/reset-modal';

@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  constructor( private pop: PopoverController) { }

  openModal() {
    this.pop.create(ResetModalComponent).present();
  }
}
