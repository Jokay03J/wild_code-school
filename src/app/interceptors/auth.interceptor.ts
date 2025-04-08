import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const clonedReq = req.clone();
  if (authService.isLoggedIn()) {
    clonedReq.headers.append(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
  }
  return next(clonedReq);
};
