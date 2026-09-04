import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-skill-details',
    templateUrl: './skill-details.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SkillDetailsComponent {
  @Input() skill;

  constructor(public modalCtrl: ModalController) { }
}
