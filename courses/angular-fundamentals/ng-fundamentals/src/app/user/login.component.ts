import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  userName;
  userPassword;
  mouseOverLogin: boolean;
  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() { }

  login(formvalues) {
    this.authService.loginUser(formvalues.userName, formvalues.userPassword).subscribe(res => {
      if (!res) {
        this.loginInvalid = true;
      } else {
        this.loginInvalid = false;
        this.router.navigate(['events']);
      }
    })
  }



  cancel() {
    this.router.navigate(['events']);
  }

}
