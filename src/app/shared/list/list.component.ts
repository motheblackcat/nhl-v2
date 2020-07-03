import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { mainForm } from '../../models/form';
import { FormManagementService } from 'src/app/services/form-management.service';
import { skillsList } from 'src/app/models/skills';
import { SkillDescComponent } from '../skill-desc/skill-desc.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: string;
  subtitle: string;
  placeholder: string;
  targetFormName: string;
  targetForm: FormArray;
  mainForm: FormGroup = mainForm;
  skillsList = skillsList;
  useSelect: boolean;
  constructor(private route: ActivatedRoute, private store: Storage, private fm: FormManagementService, private modal: ModalController) {}

  ngOnInit(): void {
    this.skillsList.forEach(skill => (skill.title = skill.title.toLowerCase()));
    this.route.data.subscribe(res => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.placeholder = res.placeholder;
      this.targetFormName = res.targetForm;
      this.targetForm = mainForm.get(this.targetFormName) as FormArray;
      this.useSelect = res.useSelect;
    });
  }

  async presentModal(skill: string): Promise<void> {
    const modal = await this.modal.create({
      component: SkillDescComponent,
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
    }
  }

  updateItem(item: HTMLInputElement, i: number) {
    if (i === null) {
      this.targetForm.push(new FormControl(item.value));
      item.value = '';
    } else {
      this.fm.saveForm();
    }
  }

  deleteItem(i: number): void {
    this.targetForm.removeAt(i);
    this.fm.saveForm();
  }
}
