import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { FuncUser } from '../interfaces/functional/user';

const AUTH_API = 'http://localhost:5050/auth';
const AUTH_LOGIN = AUTH_API + '/login';
const AUTH_REGISTER = AUTH_API + '/register';

interface AuthResult extends FuncUser{
  status?:number;
  message?:string;
  access_token?:string;
}

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError = (res: HttpErrorResponse) => {
    // console.log(res); 
    return of(res.error)
  }

  private processInfo = (data: AuthResult) => {
    console.table(data)
  }

  login(credentials: FuncUser) {
    // Credentials Sanitization
    this.http.post(AUTH_LOGIN, credentials)
      .pipe(
        catchError(this.handleError),
        map( data => Object.assign({}, credentials, data) )
      )
      .subscribe(this.processInfo)
  }

  register(credentials: FuncUser) {
    // Credentials Sanitization
    this.http.post(AUTH_REGISTER, credentials)
      .pipe(
        catchError(this.handleError),
        map( data => Object.assign({}, credentials, data) )
      )
      .subscribe(this.processInfo)
  }

}