import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #e05c65; paffing-left: 10px; }
    .error: { backbground-color: #e3c3c5; }
  `]
})
export class ProfileComponent implements OnInit {
  firstName;
  lastName;
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // console.log(this.authService.currentUser);
    if (this.authService.currentUser) {
      this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required]);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      });
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login'])
    })
  }
  
  validFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
}
