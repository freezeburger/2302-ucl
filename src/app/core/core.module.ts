import { inject, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { BusEventService } from './services/bus-event.service';
import { LogService } from './services/log.service';
import { UCL_APPLICATION_LOGGER } from 'ucl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    MessageService,
    BusEventService,
    LogService,
    {
      provide:UCL_APPLICATION_LOGGER,
      useExisting:LogService
    }
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
