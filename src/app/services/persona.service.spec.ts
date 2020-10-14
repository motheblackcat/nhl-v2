import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';

import { PersonaService } from './persona.service';
import { Storage } from '@ionic/storage';

export class StorageMock {
  get() {
    return 'data';
  }
}

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: Storage, useValue: StorageMock }] });
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
