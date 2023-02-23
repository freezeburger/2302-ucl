import { Component, Inject, Optional } from '@angular/core';
import { ApplicationLogger } from '../interfaces/application-logger';
import { UCL_APPLICATION_LOGGER } from '../tokens/application-logger.token';
import { ComponentLogger } from '../utils/component-logger';
import { ViewTemplateComponent } from '../view-template/view-template.component';

@Component({
  selector: 'ucl-view-modal',
  template: `<ng-content></ng-content>`
})
export class ViewModalComponent extends ComponentLogger{

  message = `
  "ViewModalComponent" must be used inside ViewTemplateComponent :
          <ucl-view-template> 
            <ucl-view-modal> 
            </ucl-view-modal> 
          </ucl-view-template> 
  `
  constructor(
    @Optional() private uclTemplate:ViewTemplateComponent,
    @Optional() @Inject(UCL_APPLICATION_LOGGER) private logService:ApplicationLogger
  ){
    super();
    if(!uclTemplate && logService ) this.logService.log(this.message, 'log');
    if(!uclTemplate && !logService ) this.log(this.message );
  }
}
