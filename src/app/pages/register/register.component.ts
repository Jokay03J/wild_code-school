import { NavbarComponent } from '@/components/navbar/navbar.component';
import { RegisterFormComponent } from '@/components/register-form/register-form.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, RegisterFormComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
