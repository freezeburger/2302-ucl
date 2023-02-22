import { Inject, NgModule } from '@angular/core';
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
  constructor(
    @Inject(AuthService) auth:AuthService
  ){
    console.warn(auth)
  }
}
