//------------------------------------------------------------------
// Ejemplo5: Introducción a los operadores de creación de observables (II).
//------------------------------------------------------------------
import { interval  } from 'rxjs';

let misDatos$ = interval(1000);

misDatos$.subscribe(
  valor => console.log(valor)
)




