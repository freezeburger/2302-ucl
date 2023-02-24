import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatAuthLoginComponent } from './feat-auth-login/feat-auth-login.component';
import { FeatAuthRegisterComponent } from './feat-auth-register/feat-auth-register.component';

const routes: Routes = [
  {
    path:'login',
    component:FeatAuthLoginComponent
  },
  {
    path:'register',
    component:FeatAuthRegisterComponent
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatAuthRoutingModule { }
