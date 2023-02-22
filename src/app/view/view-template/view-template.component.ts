import { Component, HostListener, Input, OnChanges, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent implements OnChanges {

  @Input() pageTitle = 'Default Page';

  constructor(
    private modalService: NgbModal,
    private titleService: Title
  ) { }

  ngOnChanges(){
    this.titleService.setTitle(this.pageTitle);
  }

  @ViewChild('content') private content: any;

  @HostListener('window:keydown.alt.p')
  toggle() {
    if (this.modalService.hasOpenModals()) return this.modalService.dismissAll();

    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => { },
      (reason) => { },
    );
  }
}
