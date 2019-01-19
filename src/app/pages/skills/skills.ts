import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {
  skills: Array<string> = [];

  constructor(private dataStorage: DataService) {
  }

  ngOnInit() {
    this.dataStorage.getData(this.skills, 'skillsData');
    this.dataStorage.clear.subscribe(() => {
      this.skills = [];
    });
  }

  addItem(skill: string) {
    // Check that the field get out of focus after entering the data
      this.dataStorage.addItem(skill, this.skills, 'skillsData');
  }

  updateItem(skill: string, value: string, array: Array<any>) {
    this.dataStorage.updateItem(skill, value, this.skills, 'skillsData');
  }

  deleteItem(skill: any) {
    this.dataStorage.deleteItem(skill, this.skills, 'skillsData');
  }
}
