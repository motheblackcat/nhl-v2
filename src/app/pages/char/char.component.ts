import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonaForm } from 'src/app/interfaces/persona.interface';

import { PersonaService } from 'src/app/services/persona.service';
import { charForm } from 'src/app/models/charform';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  persona: PersonaForm;
  title: string;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit() {
    // this.persona = this.personaService.currentPersona as PersonaForm;
    // this.persona.sheet = new FormGroup({ charForm: charForm });
    // this.persona.sheet.get('charForm').get('nom').setValue(this.persona.name);
    // this.route.data.subscribe(res => {
    //   this.title = res.title;
    // });
  }

  updateSheet() {
    // this.personaService.updatePersonas(this.persona.sheet.value);
    // console.log('persona in service', this.personaService.currentPersona);
  }

  /** TODO: Move this to be global */
  defaultOrder(): number {
    return 0;
  }
}
