//------------------------------------------------------------------
// Ejemplo4: Introducción a los operadores de creación de observables (II).
//------------------------------------------------------------------
import { of  } from 'rxjs';

let misDatos$ = of(1, 'hola', false)

misDatos$.subscribe(
  valor => console.log(valor)
)




