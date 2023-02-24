import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, inject, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { BusEventService } from './services/bus-event.service';
import { LogService } from './services/log.service';
import { UCL_APPLICATION_LOGGER } from 'ucl';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthService,
    MessageService,
    BusEventService,
    LogService,
    {
      provide: UCL_APPLICATION_LOGGER,
      useExisting: LogService
    },
    {
      provide: APP_INITIALIZER,
      useValue: () => console.warn('App Ready'),
      multi: true
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useValue: () => console.warn('App Bootstraped'),
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthService,
      multi: true
    }
  ]
})
export class CoreModule {
  // auth = inject(AuthService)
  constructor(
    /* @Inject(AuthService) auth:AuthService */
    private auth: AuthService
  ) {
    console.warn(this.auth)
    // auth.login({ email: 'orsys@orsys.fr', password: 'orsys' })
  }
}
