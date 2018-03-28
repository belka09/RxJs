let button = document.querySelector('button');
let btn$ = Rx.Observable.fromEvent(button, 'click');

btn$.subscribe(function (e) {
    console.log(e);
});

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
    .subscribe(e => {
        console.log(e);
    });

Rx.Observable.fromEvent(document, 'mousemove')
    .subscribe(e => {
        document.querySelector('h1').innerHTML = `X: ${e.clientX} , Y: ${e.clientY}`;
    });