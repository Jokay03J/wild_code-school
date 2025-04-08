import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mustAuthGuard } from './must-auth.guard';

describe('mustAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mustAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
