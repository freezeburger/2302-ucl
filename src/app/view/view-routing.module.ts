import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewInfoComponent } from './view-info/view-info.component';
import { ViewMessageComponent } from './view-message/view-message.component';

const routes: Routes = [
  {
    path:'info',
    component:ViewInfoComponent
  },
  {
    path:'message',
    component:ViewMessageComponent
  },
  {
    path:'home',
    component:ViewHomeComponent
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
