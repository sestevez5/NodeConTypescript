//------------------------------------------------------------------
// Ejemplo7: Operador reduce
//------------------------------------------------------------------
import { interval, reduce, take, map } from 'rxjs';

let misDatos$ = interval(1000);

const misDatosTransformados = misDatos$
.pipe(
  take(4),
  map( valor => valor*5),
  reduce( (acumulado, nuevoValor) => 
    acumulado + nuevoValor, 0 )
)

misDatosTransformados
.subscribe(
  valor => console.log(valor)
)





