import { ContentChild, Directive, Input, Optional, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ViewTemplateComponent } from '../view-template/view-template.component';

@Directive({
  selector: 'ucl-view-template[uclPageTitle]'
})
export class PageTitleDirective {

  @Input() uclPageTitle = 'Default Title';

  constructor(
    private titleService: Title,
    private view:ViewTemplateComponent
  ) {
  }

  ngOnChanges() {
    this.titleService.setTitle(this.uclPageTitle);
    if(this.view) this.view.pageTitle = this.uclPageTitle;
  }

}
