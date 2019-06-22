import { Injectable } from '@angular/core';

import { mainForm } from '../models/form';

@Injectable()
export class FormManagementService {
  initForm(): void {
    const data = window.localStorage.getItem('mainForm');
    if (data) {
      mainForm.setValue(JSON.parse(data));
    }
  }

  defaultOrder(): number {
    return null;
  }
}
