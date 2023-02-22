import { NgModule } from '@angular/core';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ViewInfoComponent } from './view-info/view-info.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { PageTitleDirective } from './directives/page-title.directive';

@NgModule({
  declarations: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewInfoComponent,
    ViewTemplateComponent,
    PageTitleDirective
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
