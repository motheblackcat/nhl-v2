import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonaService } from '../services/persona.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaGuard implements CanActivate {
  constructor(private router: Router, private personaService: PersonaService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.personaService.currentPersona) {
      this.router.navigate(['/select-persona']);
    }
    return !!this.personaService.currentPersona;
  }
}
