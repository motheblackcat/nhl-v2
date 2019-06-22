import { TestBed } from '@angular/core/testing';

import { FormManagementService } from './form-management.service';

describe('FormManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormManagementService = TestBed.get(FormManagementService);
    expect(service).toBeTruthy();
  });
});
