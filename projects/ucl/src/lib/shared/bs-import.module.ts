import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbAlertModule, NgbDatepickerModule, NgbNavModule, NgbPopoverModule, NgbProgressbarModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    NgbAlertModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbTypeaheadModule,
    NgbNavModule 
  ]
})
export class BsImportModule { }
