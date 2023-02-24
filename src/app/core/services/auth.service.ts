import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { FuncUser } from '../interfaces/functional/user';
import { TechReactiveService } from '../interfaces/technical/reactive-service';

const AUTH_API = 'http://localhost:5050/auth';
const AUTH_LOGIN = AUTH_API + '/login';
const AUTH_REGISTER = AUTH_API + '/register';

interface AuthResult extends FuncUser {
  status?: number;
  message?: string;
  access_token?: string;
}

export type AuthType = 'LOGIN' | 'REGISTER';

export interface AuthCommand {
  type: AuthType,
  payload: FuncUser
}

export interface AuthState extends Pick<AuthResult, 'email' | 'message'> {

}

@Injectable()
export class AuthService implements HttpInterceptor, TechReactiveService<AuthState, AuthCommand>{

  constructor(
    private http: HttpClient
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url.includes('auth')) return next.handle(req);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.authToken)
    });

    return next.handle(authReq);
  }

  public dataSource$ = new BehaviorSubject<AuthState>({
    email: '',
    message: ''
  });

  public execute(command: AuthCommand): void {
    switch (command.type) {
      case 'LOGIN':
        this.login(command.payload)
        break;
      case 'REGISTER':
        this.login(command.payload)
        break;
    }
  }

  private authToken: string | null = null;

  private handleError = (res: HttpErrorResponse) => {
    // console.log(res); 
    return of(res.error)
  }

  private processInfo = (data: AuthResult) => {
    let dataUpdate:AuthState = {
      email:'',
      message:'',
    };

    if (data.access_token) {
      this.authToken = data.access_token;
      dataUpdate.email = data.email;
      dataUpdate.message = 'Authentification Valid';
    }else{
      dataUpdate.message = data.message;
    }
    
    this.dataSource$.next(dataUpdate);

  }

  private login(credentials: FuncUser) {
    // Credentials Sanitization
    this.http.post(AUTH_LOGIN, credentials)
      .pipe(
        catchError(this.handleError),
        map(data => Object.assign({}, credentials, data))
      )
      .subscribe(this.processInfo)
  }

  private register(credentials: FuncUser) {
    // Credentials Sanitization
    this.http.post(AUTH_REGISTER, credentials)
      .pipe(
        catchError(this.handleError),
        map(data => Object.assign({}, credentials, data))
      )
      .subscribe(this.processInfo)
  }

}