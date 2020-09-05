import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { PersonaService } from 'src/app/services/persona.service';

import { mainForm } from '../../models/form';
import { skillsList } from 'src/app/consts/skills-list.consts';
import { SkillsDetailsComponent } from '../skill-desc/skill-desc.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: string;
  subtitle: string;
  placeholder: string;
  formName: string;
  targetForm: FormArray;
  mainForm: FormGroup = mainForm;
  skillsList = skillsList;
  useSelect: boolean;
  constructor(
    private route: ActivatedRoute,
    private store: Storage,
    private personaService: PersonaService,
    private modal: ModalController
  ) {}

  ngOnInit(): void {
    this.skillsList.forEach(skill => (skill.title = skill.title.toLowerCase()));
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.placeholder = res.placeholder;
      this.useSelect = res.useSelect;
      this.formName = res.targetForm;
      this.targetForm = mainForm.get(this.formName) as FormArray;
      this.targetForm.clear();
      this.personaService.currentPersona.sheet[this.formName].forEach(skill => {
        this.targetForm.push(new FormControl(skill));
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

  addItem(skill: string) {
    if (!this.targetForm.value.find(s => s === skill)) {
      this.targetForm.push(new FormControl(skill));
      this.personaService.updatePersonas(this.formName, this.targetForm.value);
    }
  }

  updateItem(item: HTMLInputElement, i: number) {
    if (i === null) {
      this.targetForm.push(new FormControl(item.value));
      item.value = '';
      this.personaService.updatePersonas(this.formName, this.targetForm.value);
    }
  }

  deleteItem(i: number): void {
    this.targetForm.removeAt(i);
    this.personaService.updatePersonas(this.formName, this.targetForm.value);
  }
}
