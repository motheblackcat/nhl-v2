import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html'
})
export class SkillDetailsComponent {
  @Input() skill;

  constructor(public modalCtrl: ModalController) { }
}
