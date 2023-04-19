import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  get(): Observable<string[]>{
    return of(this.messages);
    // return this.messages;
  }
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
