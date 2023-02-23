import { Component, Optional } from '@angular/core';
import { ViewTemplateComponent } from '../view-template/view-template.component';

@Component({
  selector: 'ucl-view-modal',
  template: `<ng-content></ng-content>`
})
export class ViewModalComponent {
  constructor(
    @Optional() private uclTemplate:ViewTemplateComponent
  ){
    if(!uclTemplate) console.log(`%c 
"ViewModalComponent" must be used inside ViewTemplateComponent :
        <ucl-view-template> 
          <ucl-view-modal> 
          </ucl-view-modal> 
        </ucl-view-template> 
    `, 'color:hotPink')
  }
}
