import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewInfoComponent } from './view-info/view-info.component';
import { ViewMessageComponent } from './view-message/view-message.component';

const routes: Routes = [
  {
    path: 'home',
    component: ViewHomeComponent
  },
  {
    path: 'message',
    component: ViewMessageComponent,
    loadChildren:() => import('../features/feat-message/feat-message.module')
                             .then( m => m.FeatMessageModule)
  },
  {
    path: 'info',
    component: ViewInfoComponent,
    loadChildren:() => import('../features/feat-info/feat-info.module')
                             .then( m => m.FeatInfoModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
