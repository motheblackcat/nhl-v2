import { IPersona } from 'src/app/interfaces/persona.interface';
import { AlertService } from 'src/app/services/alert.service';
import { FileService } from 'src/app/services/file.service';
import { PersonaService } from 'src/app/services/persona.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {
  constructor(private router: Router, private alertService: AlertService, private fileService: FileService, public personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas();
  }

  selectPersona(persona: IPersona) {
    this.personaService.currentPersona = persona;
    this.router.navigate(['/char']);
  }

  addPersonaAlert() {
    this.alertService.createAddPersonaAlert();
  }

  removePersonaAlert(persona: IPersona) {
    this.alertService.createRemovePersonaAlert(persona);
  }

  exportFile() {
    this.fileService.exportFile();
  }

  importFile() {
    this.fileService.importFile();
  }
}
