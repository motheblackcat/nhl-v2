import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { ResetModalComponent } from '../../components/reset-modal/reset-modal';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  constructor(private pop: PopoverController, private vibration: Vibration) { }

  openModal() {
    this.pop.create(ResetModalComponent).present();
    this.vibration.vibrate(500);
  }
}
