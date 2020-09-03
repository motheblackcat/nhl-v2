import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Persona } from 'src/app/interfaces/persona.interface';

import { PersonaService } from 'src/app/services/persona.service';
import { charForm } from 'src/app/models/charform';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  persona: Persona;
  title: string;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  /** TODO: Move logic to service */
  ngOnInit() {
    this.persona = this.personaService.currentPersona;
    this.persona.sheet = new FormGroup({ charForm: charForm });
    this.persona.sheet.get('charForm').get('nom').setValue(this.persona.name);
    console.log('persona', this.persona.sheet.value);

    this.route.data.subscribe(res => {
      this.title = res.title;
    });
  }

  /** TODO: Move this to be global */
  defaultOrder(): number {
    return 0;
  }
}
