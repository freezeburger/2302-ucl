import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[uclFeedback]'
})
export class FeedbackDirective {

  @Input() uclFeedback = 1.1;

  @HostBinding('style.display') display = 'block'
  @HostBinding('style.transition') transition = 'transform .4s ease';
  @HostBinding('style.transform') transform = 'scale(1)'

  @HostListener('mouseenter')
  zoomIn(){
    this.transform = `scale(${this.uclFeedback})`
  }

  @HostListener('mouseleave')
  zoomOut(){
    this.transform = `scale(1)`
  }

}
