import { inject, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { BusEventService } from './services/bus-event.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    MessageService,
    BusEventService
  ]
})
export class CoreModule { 
  // auth = inject(AuthService)
  constructor(
    /* @Inject(AuthService) auth:AuthService */
    private auth:AuthService
  ){
    console.warn(this.auth)
  }
}
