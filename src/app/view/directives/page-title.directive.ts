import { Directive, Input, Optional, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewTemplateComponent } from '../view-template/view-template.component';

@Directive({
  selector: '[appPageTitle]'
})
export class PageTitleDirective {

  @Input() appPageTitle = 'Default Title'

  constructor(
    private titleService: Title,
    @Optional() private view:ViewTemplateComponent
  ) {
    console.log(view)
  }

  ngOnChanges() {
    this.titleService.setTitle(this.appPageTitle);
    if(this.view) this.view.pageTitle = this.appPageTitle;
  }


}
