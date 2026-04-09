import { Component } from '@angular/core';
import {
  NavigationComponent,
  FooterComponent,
  SigninFormComponent,
} from '../shared/components';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavigationComponent, FooterComponent, SigninFormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  onSignin(credentials: { email: string; password: string }) {
    console.log('Sign in attempt:', credentials);
    // Handle sign in logic here
  }
}
