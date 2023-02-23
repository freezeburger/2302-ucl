import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewTemplateComponent } from '../view-template/view-template.component';

@Directive({
  selector: 'ucl-view-template[uclPausable]'
})
export class PausableDirective {

  @Output() onTogglePause = new EventEmitter();

  private get pauseState() {
    return this.modalService.hasOpenModals()
  }

  constructor(
    private modalService: NgbModal,
    private view:ViewTemplateComponent
  ) { }

  @HostListener('window:keydown.alt.p')
  toggle() {

    if (this.pauseState === true) {
      this.modalService.dismissAll();
    } else {
      this.modalService
        .open(this.view.content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then(
          (result) => { },
          (reason) => { },
        );
    }

    setTimeout(() => this.onTogglePause.emit(this.pauseState));

  }

}
