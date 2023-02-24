import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuncUser } from '../interfaces/functional/user';

const AUTH_API = 'http://localhost:5050/auth';
const AUTH_LOGIN = AUTH_API + '/login';
const AUTH_REGISTER = AUTH_API + '/register';

@Injectable()
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  login(credentials:FuncUser){
    // Crendentials Sanitization
    this.http.post(AUTH_LOGIN, credentials).subscribe(console.log)
  }

  register(credentials:FuncUser){
    // Crendentials Sanitization
    this.http.post(AUTH_LOGIN, credentials).subscribe(console.log)
  }

}