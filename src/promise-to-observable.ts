
/**
 * Promise meilleure programmation de l'asyncronicité ( relation 1-1 )
 */

// Etant producer fonction calculant input*10 de facon asyncrhone
const producer = (val: number, cb: any) => {
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

producer(10 , consumer);

