import { Component } from '@angular/core';
import { FuncUser } from 'src/app/core/interfaces/functional/user';

@Component({
  selector: 'app-feat-auth-login',
  templateUrl: './feat-auth-login.component.html',
  styleUrls: ['./feat-auth-login.component.scss']
})
export class FeatAuthLoginComponent {
  
  credentials:FuncUser = {
    email:'',
    password:''
  }
  
}
