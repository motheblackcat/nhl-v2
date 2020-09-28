import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { skillsList } from 'src/app/consts/skills-list.consts';

import { RouteData } from 'src/app/interfaces/route.interface';
import { StatsSheetModel } from 'src/app/interfaces/persona.interface';

import { ArmorSheet, Armor } from 'src/app/models/persona.model';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html'
})
export class ArmorComponent implements OnInit {
  title: string;
  formName: string;
  form: FormGroup;
  get list() {
    return <FormArray>this.form.get('list');
  }
  armorNames: String[];
  statsNames: String[];
  prNat: number;
  prMag: number;
  constructor(private route: ActivatedRoute, public personaService: PersonaService) {}

  ngOnInit() {
    this.route.data.subscribe((res: RouteData) => {
      this.title = res.title;
      this.formName = res.formName;
      this.form = new FormGroup({});
      this.armorNames = ['tete', 'torse', 'bouclier', 'bras', 'mains', 'jambes', 'pieds'];
      const sheetObject: ArmorSheet = this.personaService.currentPersona.sheet[this.formName];

      if (sheetObject.list.length <= 0) {
        this.armorNames.forEach(() => sheetObject.list.push(new Armor()));
      }

      const tdm = !!this.personaService.currentPersona.sheet['skills'].find(
        skill => skill.toLowerCase().trim() === skillsList[skillsList.length - 1].title.toLowerCase()
      );

      this.form.addControl('tdm', new FormControl({ value: tdm, disabled: true }));
      this.form.addControl('prNat', new FormControl(sheetObject['prNat']));
      this.form.addControl('prMag', new FormControl(sheetObject['prMag']));
      this.form.addControl('list', new FormArray([]));

      sheetObject.list.forEach(armor => {
        (this.form.get('list') as FormArray).push(
          new FormGroup({
            name: new FormControl(armor.name),
            pr: new FormControl(armor.pr),
            rup: new FormControl(armor.rup),
            equiped: new FormControl(armor.equiped),
            effects: new FormArray([])
          })
        );
        const armorIndex = sheetObject.list.indexOf(armor);
        const effects = (this.form.get('list') as FormArray).at(armorIndex).get('effects') as FormArray;
        armor.effects.forEach(effect =>
          effects.push(new FormGroup({ name: new FormControl(effect.name), effect: new FormControl(effect.effect) }))
        );
      });
      this.statsNames = Object.keys(this.personaService.currentPersona.sheet['stats']).filter(
        stat => stat !== 'magpsy' && stat !== 'magphy' && stat !== 'resmag'
      );
      this.prSums();
    });
  }

  updateSheet() {
    this.prSums();
  }

  prSums() {
    const sum = this.form
      .get('list')
      .value.filter(armor => armor.equiped)
      .map(armor => Number(armor.pr))
      .reduce((a: number, b: number) => a + b, 0);
    this.prNat = this.form.get('tdm').value ? sum + 1 : sum;
    this.form.get('prNat').setValue(this.prNat);

    const statsSheet: StatsSheetModel = this.personaService.currentPersona.sheet['stats'];
    this.prMag = Math.ceil(Number(statsSheet.cou.name + statsSheet.int.name + statsSheet.fo.name) / 3);
    this.form.get('prMag').setValue(this.prMag);

    this.personaService.updatePersonas(this.formName, this.form.value);
  }

  addItem(i: number) {
    const armorPiece = (this.form.get('list') as FormArray).at(i);
    (armorPiece.get('effects') as FormArray).push(
      new FormGroup({
        name: new FormControl('ev'),
        effect: new FormControl()
      })
    );
    this.updateSheet();
  }

  removeItem(i: number, j: number) {
    const armorPiece = (this.form.get('list') as FormArray).at(i);
    (armorPiece.get('effects') as FormArray).removeAt(j);
    this.updateSheet();
  }
}
