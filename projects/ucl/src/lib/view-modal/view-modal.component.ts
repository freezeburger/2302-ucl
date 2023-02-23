import { Component, Optional } from '@angular/core';
import { ComponentLogger } from '../utils/component-logger';
import { ViewTemplateComponent } from '../view-template/view-template.component';

@Component({
  selector: 'ucl-view-modal',
  template: `<ng-content></ng-content>`
})
export class ViewModalComponent extends ComponentLogger{
  constructor(
    @Optional() private uclTemplate:ViewTemplateComponent
  ){
    super();

    if(!uclTemplate) this.log(
`
"ViewModalComponent" must be used inside ViewTemplateComponent :
        <ucl-view-template> 
          <ucl-view-modal> 
          </ucl-view-modal> 
        </ucl-view-template> 
`);

  }
}
