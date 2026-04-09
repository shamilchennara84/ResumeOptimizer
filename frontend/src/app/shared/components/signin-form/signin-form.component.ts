import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss',
})
export class SigninFormComponent {
  @Output() signin = new EventEmitter<{ email: string; password: string }>();

  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      this.signin.emit({ email: this.email, password: this.password });
    }
  }
}
