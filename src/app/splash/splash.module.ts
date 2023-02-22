import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SplashRoutingModule } from './splash-routing.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    SharedModule,
    SplashRoutingModule
  ],
  exports: [
    SplashScreenComponent
  ]
})
export class SplashModule { }
