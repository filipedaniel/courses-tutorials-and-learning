import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { timingSafeEqual } from 'crypto';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, userPassword: string) {
    let loginInfo = {
      username: userName,
      password: userPassword 
    }

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user']
      }))
      .pipe(catchError(err => {
        return of(false)
      }))

    /* this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }; */
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data
        }
      }))
      .subscribe()
  }

  logout() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.currentUser = undefined;
    return this.http.post('/api/logout', {}, options);
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
