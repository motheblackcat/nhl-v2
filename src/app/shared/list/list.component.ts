import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { PersonaService } from 'src/app/services/persona.service';

import { skillsList } from 'src/app/consts/skills-list.consts';

import { RouteData } from 'src/app/interfaces/route.interface';

import { SkillsDetailsComponent } from '../skill-desc/skill-desc.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  title: string;
  subtitle: string;
  placeholder: string;
  formName: string;
  form: FormArray;
  useSelect: boolean;
  skillsList = skillsList;
  constructor(private route: ActivatedRoute, public personaService: PersonaService, private modal: ModalController) {}

  ngOnInit(): void {
    this.skillsList.forEach(skill => (skill.title = skill.title.toLowerCase()));
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.placeholder = res.placeholder;
      this.formName = res.formName;
      this.useSelect = res.useSelect;

      this.form = new FormArray([]);
      const sheetObject: String[] = this.personaService.currentPersona.sheet[this.formName];
      sheetObject.forEach(skill => {
        this.form.push(new FormControl(skill));
      });
    });
  }

  async presentModal(skill: string): Promise<void> {
    const modal = await this.modal.create({
      component: SkillsDetailsComponent,
      componentProps: { skillInput: skill }
    });
    return await modal.present();
  }

  showSkillDes(skill: string) {
    this.presentModal(skill);
  }

  addSkill(skill: string) {
    if (this.form.value.indexOf(skill) === -1) {
      this.form.push(new FormControl(skill));
      this.personaService.updatePersonas(this.formName, this.form.value);
    }
  }

  updateItem(item: HTMLInputElement, i: number) {
    if (i) {
      this.form.at(i).setValue(item.value);
      this.personaService.updatePersonas(this.formName, this.form.value);
    } else {
      this.form.push(new FormControl(item.value));
      item.value = '';
      this.personaService.updatePersonas(this.formName, this.form.value);
    }
  }

  deleteItem(i: number): void {
    this.form.removeAt(i);
    this.personaService.updatePersonas(this.formName, this.form.value);
  }
}
