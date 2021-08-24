import { skillsList } from 'src/app/consts/skills-list.consts';

import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { SkillDetailsComponent } from '../skill-details/skill-details.component';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html'
})
export class SkillAddComponent implements OnInit {
  skillsList = skillsList;
  searchList = [];

  constructor(private alertCtrl: AlertController, public modalCtrl: ModalController) { }

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
    const alert = await this.alertCtrl.create({
      header: 'Ajouter une compétence non listée',
      inputs: [
        {
          name: 'skillName',
          type: 'text',
          placeholder: 'Nom'
        }
      ],
      buttons: [
        { text: 'Nan !' },
        {
          text: 'Ouais !',
          handler: data => data.skillName ? this.selectSkill(data.skillName) : false
        }
      ]
    });

    await alert.present();
  }

  async showSkillDetails(skillName: string): Promise<void> {
    const skill = skillsList.find(s => s.title.toLocaleLowerCase() === skillName);

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
