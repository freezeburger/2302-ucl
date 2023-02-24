import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { FuncUser } from '../interfaces/functional/user';

const AUTH_API = 'http://localhost:5050/auth';
const AUTH_LOGIN = AUTH_API + '/login';
const AUTH_REGISTER = AUTH_API + '/register';

@Injectable()
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  private handleError = (res:HttpErrorResponse ) => {
    // console.log(res); 
    return of(res.error)
  }

  login(credentials:FuncUser){
    // Credentials Sanitization
    this.http.post(AUTH_LOGIN, credentials)
        .pipe(
          catchError( this.handleError )
        )
        .subscribe(console.log)
  }

  register(credentials:FuncUser){
    // Credentials Sanitization
    this.http.post(AUTH_REGISTER, credentials).subscribe(console.log)
  }

}