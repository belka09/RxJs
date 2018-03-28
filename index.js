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

Rx.Observable.range(5, 15)
    .subscribe(createSubscribe('range'));