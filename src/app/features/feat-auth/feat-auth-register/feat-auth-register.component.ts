import { Component } from '@angular/core';
import { FuncUser } from 'src/app/core/interfaces/functional/user';

@Component({
  selector: 'app-feat-auth-register',
  templateUrl: './feat-auth-register.component.html',
  styleUrls: ['./feat-auth-register.component.scss']
})
export class FeatAuthRegisterComponent {

  credentials:FuncUserRegistration = {
    email:'',
    password:'',
    controlPassword:''
  }

  requestRegistration(){
    console.log(this.credentials)
  }

}

export interface FuncUserRegistration extends FuncUser{
  controlPassword:string;
}
