import { Component, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ucl-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css']
})
export class ViewTemplateComponent {
  public pageTitle = 'Default Page';
  @Output() onTogglePause = new EventEmitter();

  get routeSegment(){
    return this.router.url.split('/')[1]
  }

  constructor(
    private modalService: NgbModal,
    private router:Router
  ) { }

  @ViewChild('content') private content: any;

  private get pauseState() {
    return this.modalService.hasOpenModals()
  }

  @HostListener('window:keydown.alt.p')
  toggle() {

    if (this.pauseState === true) {

      this.modalService.dismissAll();

    } else {

      this.modalService
        .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then(
          (result) => { },
          (reason) => { },
        );
    }

    setTimeout(() => this.onTogglePause.emit(this.pauseState));

  }
}
