import { NgModule } from '@angular/core';

import { FeatAuthRoutingModule } from './feat-auth-routing.module';
import { FeatAuthLoginComponent } from './feat-auth-login/feat-auth-login.component';
import { FeatAuthRegisterComponent } from './feat-auth-register/feat-auth-register.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FeatAuthLoginComponent,
    FeatAuthRegisterComponent
  ],
  imports: [
    SharedModule,
    FeatAuthRoutingModule
  ],
  exports: [
    FeatAuthLoginComponent,
    FeatAuthRegisterComponent
  ]
})
export class FeatAuthModule { }
