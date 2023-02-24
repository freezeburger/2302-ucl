import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatInfoComponent } from './feat-info.component';

const routes: Routes = [
  {
    path:'',
    component:FeatInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatInfoRoutingModule { }
