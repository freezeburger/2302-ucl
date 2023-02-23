
export class ComponentLogger {

    styles = 'color:hotPink';

    public log(message:any | Array<any>):void {
        console.groupCollapsed('Developper Message')
            Array.isArray(message) ?  
                    this.logArray(message)
                    :
                    this.logString(message);
        console.groupEnd()
    }

    private logString(message:any){
        console.log(
            `%c
            ${message}
            `, this.styles )
    }
    private logArray(message:Array<any>){
        console.table(message);
    }
}
