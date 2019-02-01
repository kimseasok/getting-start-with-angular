import { Component } from '@angular/core';
import { IUser } from './user/user.model';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
  userName: string;

  constructor(private auth: AuthService) {}

  get isLoggedIn() {
    if (this.auth.currentUser) {
      this.userName = this.auth.currentUser.userName;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.auth.logoutUser();
  }
}
