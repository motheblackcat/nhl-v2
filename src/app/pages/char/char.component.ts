import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PersonaService } from 'src/app/services/persona.service';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  targetForm: FormGroup;
  title: string;
  constructor(private route: ActivatedRoute, private personaService: PersonaService) {}

  ngOnInit(): void {
    console.log(this.personaService.currentPersona);

    this.route.data.subscribe(res => {
      this.title = res.title;
      this.targetForm = mainForm.get(res.targetForm) as FormGroup;
    });
  }
}
