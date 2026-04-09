import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  NavigationComponent,
  FooterComponent,
  SigninFormComponent,
} from '../../../shared/components';
import { AuthService } from '../services/auth.service';
import { AuthCredentials } from '../domain/auth-credentials';

@Component({
  standalone: true,
  selector: 'app-signin',
  imports: [NavigationComponent, FooterComponent, SigninFormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSignin(credentials: AuthCredentials) {
    const authenticated = this.authService.signIn(credentials);

    if (!authenticated) {
      this.router.navigate(['signin-error']);
      return;
    }

    console.log('Sign in successful:', credentials);
  }
}
