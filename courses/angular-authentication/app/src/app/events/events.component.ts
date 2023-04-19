import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [];

  constructor(private _service: EventService) { }

  ngOnInit() {
    this._service.getEvents()
      .subscribe(
        err => console.log(err),
        res => console.log(res),
      );
  }

}
