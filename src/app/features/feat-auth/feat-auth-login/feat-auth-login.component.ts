import { Component } from '@angular/core';
import { FuncUser } from 'src/app/core/interfaces/functional/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-feat-auth-login',
  templateUrl: './feat-auth-login.component.html',
  styleUrls: ['./feat-auth-login.component.scss']
})
export class FeatAuthLoginComponent {

  constructor(
    public authService:AuthService
  ){}
  
  credentials:FuncUser = {
    email:'orsys@orys.fr',
    password:'orsys'
  }

  requestLogin(){
    this.authService.execute({type:'LOGIN', payload:this.credentials })
  }

}
