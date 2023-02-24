import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatAuthRoutingModule } from './feat-auth-routing.module';
import { FeatAuthLoginComponent } from './feat-auth-login/feat-auth-login.component';
import { FeatAuthRegisterComponent } from './feat-auth-register/feat-auth-register.component';


@NgModule({
  declarations: [
    FeatAuthLoginComponent,
    FeatAuthRegisterComponent
  ],
  imports: [
    CommonModule,
    FeatAuthRoutingModule
  ],
  exports: [
    FeatAuthLoginComponent,
    FeatAuthRegisterComponent
  ]
})
export class FeatAuthModule { }
