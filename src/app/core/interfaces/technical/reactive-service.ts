import { BehaviorSubject } from "rxjs";

export interface TechReactiveService<DataUnit, Command> {

    dataSource$:BehaviorSubject<DataUnit[]>;

    execute(command:Command):void;

}
    