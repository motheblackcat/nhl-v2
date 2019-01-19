import { Component } from '@angular/core';
import { CharPage } from '../char/char';
import { StatsPage } from '../stats/stats';
import { SkillsPage } from '../skills/skills';
import { EquipPage } from '../equip/equip';
import { InvPage } from '../inv/inv';
import { ResetPage } from '../reset/reset';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  char = CharPage;
  stats = StatsPage;
  skills = SkillsPage;
  equip = EquipPage;
  inv = InvPage;
  reset = ResetPage;

  constructor() { }
}
