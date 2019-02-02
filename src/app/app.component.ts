import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { slideInAnimation } from './app.animations';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
  }

  get isDisplayedMessage(): boolean {
    return this.messageService.isDisplay;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }

  displayMessage() {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messageService.isDisplay = true;
  }

  hideMessage() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplay = false;
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
