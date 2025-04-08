import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { mustAuthGuard } from './guards/mustAuth/must-auth.guard';
import { mustNotLoggedGuard } from './guards/mustNotLogged/must-not-logged.guard';
import { mustRoleGuard } from './guards/mustRole/must-role.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [mustNotLoggedGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [mustNotLoggedGuard],
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [mustAuthGuard, mustRoleGuard(['ROLE_USER'])],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [mustAuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [mustAuthGuard, mustRoleGuard(['ROLE_ADMIN'])],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
