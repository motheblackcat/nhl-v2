import { SKILLS_LIST } from 'src/app/consts/skills-list.consts';
import { AlertService } from 'src/app/services/alert.service';

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SkillDetailsComponent } from '../skill-details/skill-details.component';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html'
})
export class SkillListComponent implements OnInit {
  skillsList = SKILLS_LIST;
  searchList = [];

  constructor(private alertService: AlertService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.searchList = this.skillsList.map(skill => skill.title.toLowerCase());
  }

  updateSearchList(eventTarget: any) {
    this.searchList = [];
    this.skillsList.forEach(skill => {
      const formatedSkill: string = skill.title.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
      const formatedInput: string = eventTarget.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
      if (formatedSkill.indexOf(formatedInput) > -1) {
        this.searchList.push(skill.title.toLowerCase())
      }
    });
  }

  async addUnlistedSkill(): Promise<void> {
    this.alertService.createAddUnlistedSkillAlert(this.modalCtrl);
  }

  async showSkillDetails(skillName: string): Promise<void> {
    const skill = SKILLS_LIST.find(s => s.title.toLocaleLowerCase() === skillName);
    const modal = await this.modalCtrl.create({
      component: SkillDetailsComponent,
      componentProps: { skill }
    });
    return await modal.present();
  }

  selectSkill(skill: string) {
    this.modalCtrl.dismiss(skill);
  }
}
