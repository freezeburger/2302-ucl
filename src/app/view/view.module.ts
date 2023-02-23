import { NgModule } from '@angular/core';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ViewInfoComponent } from './view-info/view-info.component';

@NgModule({
  declarations: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewInfoComponent
  ],
  imports: [
    ViewRoutingModule,
    SharedModule
  ],
  exports: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewInfoComponent
  ]
})
export class ViewModule { }
