import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  formBuild = inject(FormBuilder)

  signUpForm = this.formBuild.group({
    username: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    passwords: this.formBuild.group({
      password: ['', [this.securePasswordValidator()]],
      confirmPassword: ['']
    }, {validators: this.samePassword()})
  });

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

      return passwordValid ? null : { securePassword: true };
    };
  }

  samePassword(): ValidatorFn {
    return (control): ValidationErrors | null => {
      const passwordValue = control.get('password');
      const confirmPasswordValue = control.get('confirmPassword');
      if(!confirmPasswordValue || !passwordValue) return { confirmPassword: true }      
      return confirmPasswordValue.value === passwordValue.value ? null : { confirmPassword: true }
    }
  }

  handleSubmit() {
    console.log(this.signUpForm.value);
  }
}
