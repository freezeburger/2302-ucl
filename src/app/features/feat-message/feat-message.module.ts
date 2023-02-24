import { NgModule } from '@angular/core';

import { FeatMessageRoutingModule } from './feat-message-routing.module';
import { FeatMessageComponent } from './feat-message.component';
import { SortByTitlePipe } from './sort-by-title.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FeatMessageComponent,
    SortByTitlePipe
  ],
  imports: [
    SharedModule,
    FeatMessageRoutingModule
  ],
  exports: [
    FeatMessageComponent
  ]
})
export class FeatMessageModule { }
