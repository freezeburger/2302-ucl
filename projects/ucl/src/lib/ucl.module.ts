import { NgModule } from '@angular/core';
import { PageTitleDirective } from './directives/page-title.directive';
import { SharedModule } from './shared/shared.module';
import { ViewTemplateComponent } from './view-template/view-template.component';

@NgModule({
  declarations: [
    PageTitleDirective,
    ViewTemplateComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PageTitleDirective,
    ViewTemplateComponent
  ]
})
export class UclModule { }
