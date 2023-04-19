import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';


@Injectable()
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log("A");
    // return this.eventService.getEvents().pipe(map(events => events));
    // return this.eventService.getEvents();
    return this.eventService.getEvent(route.params['id']);
  }
}
