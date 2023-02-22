import { NgModule } from '@angular/core';
import { BsImportModule } from './bs-import.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    NgImportModule,
    BsImportModule
  ]
})
export class SharedModule { }
