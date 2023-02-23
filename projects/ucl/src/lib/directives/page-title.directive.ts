import { Directive, Input, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ViewTemplateComponent } from '../view-template/view-template.component';

@Directive({
  selector: '[uclPageTitle]'
})
export class PageTitleDirective {

  @Input() uclPageTitle = 'Default Title'

  constructor(
    private titleService: Title,
    @Optional() private view:ViewTemplateComponent
  ) {
    console.log(view)
  }

  ngOnChanges() {
    this.titleService.setTitle(this.uclPageTitle);
    if(this.view) this.view.pageTitle = this.uclPageTitle;
  }

}
