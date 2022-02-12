//------------------------------------------------------------------
// Ejemplo8: Combinación de observables.- Merge
//------------------------------------------------------------------
import { interval, map, merge, take} from 'rxjs';

let miobservable1$ = interval(1000)
.pipe(
  map(valor => "obs1 ("+valor+")")
);


let miobservable2$ = interval(700)
.pipe(
  map(valor => "obs2 ("+valor+")")
);


const miObservableCombinado$ = merge(miobservable1$, miobservable2$);

miObservableCombinado$
.subscribe(
  valor => console.log(valor)
);


// Obs1$ => ---------0---------1---------2---------3---------4
// Obs2$ => ------0------1------2------3------4

//       => ------x--x---x-----xx------x-x----x----x---------x








