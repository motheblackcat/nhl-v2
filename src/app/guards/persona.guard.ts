import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { PersonaService } from '../services/persona.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaGuard implements CanActivate {
  constructor(private router: Router, public personaService: PersonaService) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.personaService.currentPersona) {
      this.router.navigate(['/persona']);
    }
    return !!this.personaService.currentPersona;
  }
}
