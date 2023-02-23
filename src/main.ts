/// <reference types="@angular/localize" />

import { PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log('Firt Script');

platformBrowserDynamic(
  [
    {
      provide: PLATFORM_INITIALIZER,
      useValue: () => console.warn('Platform Ready'),
      multi: true
    }
  ]
)
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
