export type LogInfo = 'log' | 'warning' | 'error';

export interface ApplicationLogger {
    log( message:any, level:LogInfo ):void;
}
