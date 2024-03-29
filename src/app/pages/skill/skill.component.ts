import { SKILLS_LIST } from 'src/app/consts/skills-list.consts';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { SkillListComponent } from './skill-list/skill-list.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit {
  title: string = 'compétences';
  formName: string = 'skills';
  form: UntypedFormArray;
  useSelect: boolean;
  skillsList = SKILLS_LIST;

  constructor(private modalCtrl: ModalController, private personaService: PersonaService) { }

  ngOnInit() {
    this.form = new UntypedFormArray([]);
    const sheetObject: string[] = this.personaService.currentPersona.sheets[this.formName];
    sheetObject.forEach(skill => this.form.push(new UntypedFormControl(skill)));
  }

  async showSkillList(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: SkillListComponent
    });
    modal.onDidDismiss().then((res: { data: string, role: any }) => {
      if (res.data) {
        this.form.push(new UntypedFormControl(res.data));
        this.personaService.updatePersonas(this.formName, this.form.value);
      }
    });
    return await modal.present();
  }

  async showSkillDetails(skillName: string): Promise<void> {
    const skill = SKILLS_LIST.find(skill => skill.title.toLowerCase() === skillName.trim().toLowerCase());
    const modal = await this.modalCtrl.create({
      component: SkillDetailsComponent,
      componentProps: { skill }
    });
    return await modal.present();
  }

  removeSkill(i: number): void {
    this.form.removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
