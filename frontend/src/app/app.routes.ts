import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SigninErrorComponent } from './signin-error/signin-error.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin-error', component: SigninErrorComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];
