
import { BehaviorSubject, from, fromEvent, of, ReplaySubject, Subject, tap } from "rxjs";

/**
 * Promise meilleure programmation de l'asyncronicité ( relation 1-1 )
 */



// Etant producer fonction calculant input*10 de facon asyncrhone
/* const producer = (val: number, cb: any) => {
    const delay = 3000 * Math.random();
    let result: any;
    setTimeout(
        () => {
            result = val * 10;
            cb(result)
        }
        , delay
    );
    // Can not return result (empty)
}

const consumer = (data: any) => {
    console.log({ data });
    return data;
}

producer( 10 , consumer );
 */

// Programmation par promise
/* 
const producer = (val: number): Promise<number> => {
    const delay = 3000 * Math.random();
    const promise = new Promise<number>((resolve, reject) => {
        let result: number;
        setTimeout(
            () => {
                result = val * 10;
                resolve(result)
            }
            , delay
        );
    });
    return promise;
}

const consumer = (data: any) => {
    console.log({ data });
    return data;
}

producer( 10 )
    .then( consumer )
    .then( data => data + 1)
    .then( data => producer( data ) )
    .then( consumer ) 

const main = async () => {
    const res = await producer( 10 );
    console.log('Done')
    return res;
}
main();
console.log('Main Done ?')
 */

/**
 * Observable : meilleure programmation de l'asyncronicité ( relation 1-n )
 * - sync / async / event / promise
 */

const producer = (val: number): Promise<number> => {
    const delay = 3000 * Math.random();
    const promise = new Promise<number>((resolve, reject) => {
        let result: number;
        setTimeout(
            () => {
                result = val * 10;
                resolve(result)
            }
            , delay
        );
    });
    return promise;
}

const consumer = (data: any) => {
    console.log({ data });
    return data;
}
const bool$ = of(true /* sync data */)
bool$.subscribe(consumer);
bool$.subscribe(console.warn);

const click$ = fromEvent(document,'click')
click$.subscribe(consumer); 

const promise$ = from( producer(10))
promise$
    .pipe(
       tap(console.log) 
    )    
    .subscribe(consumer);

/**
 * Observable
 * 
 * Subject
 * BehaviorSubject
 * ReplaySubject
 * AsyncSubject
 */

const sub$ = new ReplaySubject<any>(2);
// sub$.subscribe( data => console.log(1,data))
sub$.next('DATA 1')
sub$.next('DATA 1.1')
sub$.next('DATA 1.2')
sub$.subscribe( data => console.log(2,data))
sub$.next('DATA 2')