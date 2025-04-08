import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mustRoleGuard } from './must-role.guard';

describe('mustRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mustRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
