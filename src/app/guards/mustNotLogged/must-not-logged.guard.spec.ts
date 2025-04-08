import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mustNotLoggedGuard } from './must-not-logged.guard';

describe('mustNotLoggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mustNotLoggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
