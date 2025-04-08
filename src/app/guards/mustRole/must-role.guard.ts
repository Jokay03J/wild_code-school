import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';
import { Roles } from '../../models/Roles';

export const mustRoleGuard: (requiredRole: Roles[]) => CanActivateFn =
  (requiredRole) => (route, state) => {
    const authService = inject(AuthService);
    const token = authService.getToken();
    if (!token) return false;
    const userRoles = token.roles;
    return (
      userRoles.find((role: { authority: Roles }) =>
        requiredRole.includes(role.authority)
      ) !== undefined
    );
  };
