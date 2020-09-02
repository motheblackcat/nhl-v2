import { Component, OnInit, Input } from '@angular/core';

import { skillsList } from 'src/app/models/skills';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-skill-desc',
  templateUrl: './skill-desc.component.html',
  styleUrls: ['./skill-desc.component.scss']
})
export class SkillsDetailsComponent implements OnInit {
  @Input() skillInput;
  skill;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.skill = skillsList.find(s => this.skillInput === s.title);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
