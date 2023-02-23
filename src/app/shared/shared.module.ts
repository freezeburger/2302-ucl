import { NgModule } from '@angular/core';

import { UclModule } from 'ucl';

import { BsImportModule } from './bs-import.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    UclModule,
    NgImportModule,
    BsImportModule
  ]
})
export class SharedModule { }
