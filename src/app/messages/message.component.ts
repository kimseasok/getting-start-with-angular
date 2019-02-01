import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent {
  constructor(private msgService: MessageService, private router: Router) {}

  get messages() {
    return this.msgService.messages;
  }
  close(): void {}
}
