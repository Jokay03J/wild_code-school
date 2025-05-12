import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.setItem(
      'token',
      JSON.stringify({ roles: [{ authority: 'ROLE_USER' }] })
    );
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should logout correctly', () => {
    service.logout();
    expect(service.getToken()).toBeNull();
  });
});
