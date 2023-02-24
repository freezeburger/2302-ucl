import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FuncMessage } from '../interfaces/functional/message';
import { TechReactiveService } from '../interfaces/technical/reactive-service';


export type MessageType = 'LOAD' | 'SEND';

export interface MessageCommand {
  type: MessageType,
  payload: null | Omit<FuncMessage, 'id'>
}

@Injectable()
export class MessageService implements TechReactiveService<FuncMessage[], MessageCommand> {

  constructor(
    private http: HttpClient
  ) { }
  public dataSource$ = new BehaviorSubject<FuncMessage[]>([]);

  public execute(command: MessageCommand): void {
    throw new Error('Method not implemented.');
  }

  public createCommand(type: 'LOAD', payload: null): MessageCommand;
  public createCommand(type: 'SEND', payload: Omit<FuncMessage, 'id'>): MessageCommand;
  public createCommand(type: MessageType, payload: null | Omit<FuncMessage, 'id'>): MessageCommand {
    return { type, payload }
  }

}
