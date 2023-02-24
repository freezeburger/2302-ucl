import { BehaviorSubject } from "rxjs";

export enum TechActionType{
    DEFAULT_ACTION = 'DEFAULT_ACTION'
}

export interface TechAction {
    type:TechActionType;
    payload:any;
}

export interface TechAppDispatcher<State> {
    state$:BehaviorSubject<State>;
    action$:BehaviorSubject<TechAction>;
    dispatch(action:TechAction):void;
}
