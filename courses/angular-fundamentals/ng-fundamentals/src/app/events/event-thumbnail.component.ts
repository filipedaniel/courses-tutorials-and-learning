import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';
// import { EventEmitter } from 'events';


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="card mb-3 pointable" [routerLink]="['/events/' + event.id]">
      <div class="card-body">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date: {{event.date | date: 'd/M/y'}}</div>
        <div [ngSwitch]="event?.time" [ngClass]="{'text-danger': event?.time === '8:00 am', 'text-info': event?.time === '10:00 am'}">
          Time: {{event.time}}
          <span *ngSwitchCase="'8:00 am'">Early Start</span>
          <span *ngSwitchCase="'10:00 am'">Late Start</span>
          <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Price: {{event.price | currency:'USD'}}</div>
        <div *ngIf="event.location">
          <span>Location: {{ event?.location?.address }},</span>
          <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
        </div>
        <div *ngIf="event.onlineUrl">Online URL: {{ event.onlineUrl }}</div>
      </div>
    </div>
    `,
  styles: []
})

export class EventThumbnailComponent {
  // ways to cominicate between components: Input, output and template variables!
  @Input() event: IEvent;

  constructor() { }




}
