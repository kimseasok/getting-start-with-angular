import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _message: string[] = [];

  get messages(): string[] {
    return this._message;
  }

  addMessage(message: string): void {
    const currentDate = new Date();

    this.messages.unshift(`${message} at ${currentDate.toLocaleDateString()}`);
  }
}
