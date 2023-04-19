import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
  em { float: right; color: #e05c65; paffing-left: 10px; }
  .error: { backbground-color: #e3c3c5; }
`]
})

export class EventCreateComponent implements OnInit {
  isDirty: boolean = true;
  newEvent;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValue) {
    this.eventService.saveEvent(formValue).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['events']);
    })
  }

  // eventNotSave() {
  //   console.log("AAA");
  //   this.toastrService.error('You have not saved this event, do you really want to cancel?');
  // }
}
