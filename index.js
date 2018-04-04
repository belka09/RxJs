function createSubscribe(name) {
 return {
     next(x) {
         console.log(name, ": ", x);
     },
    error(err){
        console.log("Error: " , err)
    },
    complete(){
        console.log(name, " :completed");
    }
 }
}

// Rx.Observable.of(5, 4, 52, 8, "lol", "kek", [4, 25, 25, 25, 9])
//     .subscribe(createSubscribe('of'));

// Rx.Observable.interval(500)
//     .take(15)
//     .subscribe(createSubscribe('interval'));

// Rx.Observable.timer(4000, 500)
//     .take(10)
//     .subscribe(createSubscribe('timer'));

// Rx.Observable.range(3, 6)
//     .subscribe(createSubscribe('range'));

// const set = new Set([1, 2, 3, '4' , {id: 6}, 1, 8, 3]);

// const map = new Map([[1, 2], [3, 4], [5,6]])
 
// Rx.Observable.from(map)
//     .subscribe(createSubscribe('from'));

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//     // .map(x => x.target.value)
//     .pluck('target', 'value')
//     .map(x => x.toUpperCase())
//     .map(x => {
//         return {
//             value: x,
//             length: x.length
//         };
//     })
//     .subscribe(createSubscribe('map'));

// Rx.Observable.of(1,5,'lol', 'kek')
//     .skipWhile( x => {
//         return typeof(x) === 'number';
//     })
//     .subscribe(createSubscribe('find'));

// Rx.Observable.interval(500)
//     .skipWhile( x => x < 5)
//     .takeWhile( x => x < 13)
//     .subscribe(createSubscribe("takeWhile"));

// Rx.Observable.interval(500)
//     .skipUntil(Rx.Observable.timer(3000))
//     .takeUntil(Rx.Observable.timer(5000))
//     .subscribe(createSubscribe("skipUntil"));

const cars = [
    {
        name: 'bmw',
        price: 600
    },
    {
        name: 'audi',
        price: 500
    },
    {
        name: 'chevrolet',
        price: 200
    }
];

// Rx.Observable.range(0, 10)
//     .filter(x => x === 3)
//     .subscribe(createSubscribe('filter: '));

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//     .map(e => e.target.value)
//     .subscribe( x => {
//         Rx.Observable.from(cars)
//             .filter(c => c.name === x)
//             .subscribe(v => {
//                 document.querySelector('div').innerHTML = `<h2>${v.name}</h2><h4>${v.price}</h4>`
//             })
//     })


Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
    .map(e => e.target.value)
    .debounceTime(1500)
    .subscribe(createSubscribe('debounceTime'));