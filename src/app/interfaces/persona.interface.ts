import { FormGroup } from '@angular/forms';

export interface Persona {
  name: string;
  color: string;
  sheet: Object;
}

export interface PersonaForm {
  name: string;
  color: string;
  sheet: FormGroup;
}
