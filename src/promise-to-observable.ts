
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
 * Observable
 */
