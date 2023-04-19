import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-events-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent implements OnInit {
  public event:IEvent;
  public addMode: boolean;
  filterBy: string = 'all';

  constructor(
    private eventService: EventService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.event = this.eventService.getEvent(+this.activeRoute.snapshot.params['id']);
    // this.eventService.getEvent(+this.activeRoute.snapshot.params['id'])
    //   .subscribe((event: IEvent) => {
    //     this.event = event;
    //   })
    this.activeRoute.data.forEach(data => {
      this.event = data['event'];
      this.addMode = false;
    }) 
  }

  addSession() {
    this.addMode = true;
  }

  cancelAddMode() {
    this.addMode = false;
  }
}
