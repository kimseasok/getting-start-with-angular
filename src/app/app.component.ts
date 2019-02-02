import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { slideInAnimation } from './app.animations';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService) { }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
