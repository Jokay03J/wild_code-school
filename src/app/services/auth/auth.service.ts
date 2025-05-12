import { Roles } from '@/models/Roles';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  constructor() {}

  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    this.http
      .post('http://localhost:8080/auth/login', formData, {
        responseType: 'text',
      })
      .subscribe((res) => {
        localStorage.setItem('token', res);
        this.router.navigate(['/']);
      });
  }

  register(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    this.http
      .post('http://localhost:8080/auth/register', formData, {
        responseType: 'text',
      })
      .subscribe((res) => {
        this.router.navigate(['/login']);
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const decodedToken: { exp: number; roles: { authority: Roles }[] } =
        jwtDecode(token);
      return decodedToken;
    } catch {
      this.logout();
      return null;
    }
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decodedToken = this.getToken();
      if (!decodedToken) return false;
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      this.logout();
      return false;
    }
  }

  hasRole(requiredRole: Roles[]) {
    const token = this.getToken();
    if (!token) return false;
    const userRoles = token.roles;
    return (
      userRoles.find((role: { authority: Roles }) =>
        requiredRole.includes(role.authority)
      ) !== undefined
    );
  }
}
