import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatInfoRoutingModule } from './feat-info-routing.module';
import { FeatInfoComponent } from './feat-info.component';


@NgModule({
  declarations: [
    FeatInfoComponent
  ],
  imports: [
    CommonModule,
    FeatInfoRoutingModule
  ],
  exports: [
    FeatInfoComponent
  ]
})
export class FeatInfoModule { }
