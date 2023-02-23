import { Injectable } from '@angular/core';
import { ApplicationLogger, LogInfo } from 'ucl';

@Injectable()
export class LogService implements ApplicationLogger {

  log(message: any, level: LogInfo): void {
    console.groupCollapsed('Application Logger');
    console.log(message);
    console.groupEnd();
  }
}
