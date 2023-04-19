import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  events = [];
  constructor(private _service: EventService ) { }

  ngOnInit() {
    this._service.getEventsSpecial()
      .subscribe(
        err => console.log(err),
        res => console.log(res),
      );
  }

}
