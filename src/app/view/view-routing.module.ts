import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthService } from '../core/services/auth.service';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewInfoComponent } from './view-info/view-info.component';
import { ViewMessageComponent } from './view-message/view-message.component';

const routes: Routes = [
  {
    path: 'home',
    component: ViewHomeComponent,
    loadChildren: () => import('../features/feat-auth/feat-auth.module')
      .then(m => m.FeatAuthModule)
  },
  {
    path: 'message',
    //canActivate:[AuthGuard],
    canMatch:[AuthGuard],
    component: ViewMessageComponent,
    loadChildren: () => import('../features/feat-message/feat-message.module')
      .then(m => m.FeatMessageModule)
  },
  {
    path: 'info',
    //canActivate:[AuthGuard],
    canMatch:[AuthGuard],
    component: ViewInfoComponent,
    loadChildren: () => import('../features/feat-info/feat-info.module')
      .then(m => m.FeatInfoModule)
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
export class ViewRoutingModule {
  
}
