import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MessageService } from '../messages/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  pageTitle = 'Login';
  userName: string;
  password: string;

  constructor(
    private auth: AuthService,
    private smg: MessageService,
    private router: Router
  ) {}

  login(formValues: { userName: string; password: string }) {
    let isValidLogin: boolean;
    isValidLogin = this.auth.loginUser(formValues.userName, formValues.password);

    if (isValidLogin) {
      this.router.navigate(['products']);
    }
  }
}
