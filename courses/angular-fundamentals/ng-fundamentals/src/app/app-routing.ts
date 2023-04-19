import { Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
// import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';
import { EventResolverService } from './events/event-resolver.service';


export const AppRoutes: Routes = [
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreatEvent'] },
  { path: 'events', component: EventsListComponent , resolve: { events: EventsListResolverService } },
  // { path: 'events/:id', component: EventDetailsComponent },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService} },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];
