import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-skill-desc',
  templateUrl: './skill-desc.component.html',
  styleUrls: ['./skill-desc.component.scss']
})
export class SkillsDetailsComponent {
  @Input() skill;

  constructor(private modalCtrl: ModalController) {}
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
