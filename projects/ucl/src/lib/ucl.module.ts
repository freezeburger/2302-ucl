import { NgModule } from '@angular/core';
import { PageTitleDirective } from './directives/page-title.directive';
import { ViewTemplateComponent } from './view-template/view-template.component';

@NgModule({
  declarations: [
  
    PageTitleDirective,
       ViewTemplateComponent
  ],
  imports: [
  ],
  exports: [
  
    PageTitleDirective,
       ViewTemplateComponent
  ]
})
export class UclModule { }
