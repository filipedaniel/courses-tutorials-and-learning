import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _events = "http://localhost:3000/events";
  private _eventsSpecial = "http://localhost:3000/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._events);
  }

  getEventsSpecial() {
    return this.http.get<any>(this._eventsSpecial);
  }
}
