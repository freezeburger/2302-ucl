import { NgModule } from '@angular/core';
import { PageTitleDirective } from './directives/page-title.directive';
import { SharedModule } from './shared/shared.module';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { WithPathRootPipe } from './pipes/with-path-root.pipe';
import { PausableDirective } from './directives/pausable.directive';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { RouterNavComponent } from './router-nav/router-nav.component';

@NgModule({
  declarations: [
    PageTitleDirective,
    ViewTemplateComponent,
    WithPathRootPipe,
    PausableDirective,
    ViewModalComponent,
    RouterNavComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PageTitleDirective,
    PausableDirective,
    ViewTemplateComponent,
    ViewModalComponent
  ]
})
export class UclModule { }
