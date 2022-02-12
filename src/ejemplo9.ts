//------------------------------------------------------------------
// Ejemplo8: Combinación de observables.- Combinelatest
// https://rxjs.dev/api/operators/withLatestFrom (ejemplo timer informe)
// https://rxjs.dev/api/operators/combineLatest ( ejemplo horarios.)
// https://rxmarbles.com/   (Todos)
//------------------------------------------------------------------
import { combineLatest, interval, map, merge, take, withLatestFrom} from 'rxjs';

const readline = require('readline');

function readInput() {
    const interfac = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => interfac.question("", answer => {
        interfac.close();
        resolve(answer);
    }))
}

let miobservable1$ = interval(1000)
  .pipe(
    take(5)
  );


  let miobservable2$ = interval(700)
  .pipe(
    take(5)
  );

  let miobservable3$ = interval(400)
  .pipe(
    take(6)
  );


( async () =>

  {

    console.log('EJEMPLO CONBINELATEST');
    combineLatest([miobservable1$, miobservable2$])
    .subscribe(value => console.log(value));


    await readInput();
    console.log('---------');

    console.log('EJEMPLO WITHLATESTFROM CON 2');
    miobservable1$
    .pipe(
      withLatestFrom(miobservable2$)
    ).subscribe(value => console.log(value));

   

  }
)()


// miObservable1$ => ---------0---------1---------2---------3---------4
// miObservable2$ => ------0------1------2------3------4
// miObservable3$ => --0--1--2--3--4--5








