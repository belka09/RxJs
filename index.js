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

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
    // .map(x => x.target.value)
    .pluck('target', 'value')
    .map(x => x.toUpperCase())
    .map(x => {
        return {
            value: x,
            length: x.length
        };
    })
    .subscribe(createSubscribe('map'));
