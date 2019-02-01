import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { MessageService } from '../messages/message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private smgService: MessageService, private router: Router) {}

  loginUser(userName: string, password: string): boolean {
    if (!userName || !password) {
      this.smgService.addMessage('Please enter valid username and password');
      return false;
    }

    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };

      this.smgService.addMessage(`User: ${this.currentUser.userName} is login`);
      return true;
    }
  }

  logoutUser(): void {
    this.currentUser = null;
    this.router.navigate(['/']);
  }
}
