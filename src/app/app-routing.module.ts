import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./splash/splash.module').then( m => m.SplashModule)
  },
  {
    path:'app',
    loadChildren:() => import('./view/view.module').then( m => m.ViewModule)
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
