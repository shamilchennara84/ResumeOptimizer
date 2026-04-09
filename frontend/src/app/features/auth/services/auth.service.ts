import { Injectable } from '@angular/core';
import { AuthCredentials } from '../domain/auth-credentials';

@Injectable({ providedIn: 'root' })
export class AuthService {
  signIn(credentials: AuthCredentials): boolean {
    return (
      credentials.email.trim().length > 0 &&
      credentials.password.trim().length > 0
    );
  }
}
