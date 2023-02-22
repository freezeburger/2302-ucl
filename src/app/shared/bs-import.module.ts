import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbAlertModule, NgbDatepickerModule, NgbPopoverModule, NgbProgressbarModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    NgbAlertModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbTypeaheadModule
  ]
})
export class BsImportModule { }
