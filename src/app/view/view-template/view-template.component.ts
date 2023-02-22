import { Component, EventEmitter, HostListener, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent implements OnChanges {

  @Input() pageTitle = 'Default Page';
  @Output() onTogglePause = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private titleService: Title
  ) { }

  ngOnChanges() {
    this.titleService.setTitle(this.pageTitle);
  }

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
