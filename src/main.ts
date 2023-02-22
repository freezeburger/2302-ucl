/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log('Firt Script');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
