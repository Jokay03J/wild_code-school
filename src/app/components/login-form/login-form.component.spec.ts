import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Observable, of, throwError } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent, HttpClientTestingModule],
      providers: [
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        AuthService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when inputs are filled correctly', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123',
    });
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should have an invalid form when inputs are empty', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('should call AuthService login method on form submission', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123',
    });

    component.onSubmit();
  });

  it('should disable the submit button when the form is invalid', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();
  });

  it('should enable the submit button when the form is valid', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123',
    });
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalse();
  });
});
