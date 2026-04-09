import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signin',
    loadComponent: () =>
      import('../features/auth/signin/signin.component').then(
        (m) => m.SigninComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../features/auth/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'signin-error',
    loadComponent: () =>
      import('../features/auth/signin-error/signin-error.component').then(
        (m) => m.SigninErrorComponent
      ),
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
];
