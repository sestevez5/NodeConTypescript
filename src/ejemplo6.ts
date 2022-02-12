//------------------------------------------------------------------
// Ejemplo6: Operadores de transformación de observables (filtrado y trasnsformación de valores). ( filter, take, map, distinct )
//------------------------------------------------------------------
import { interval, filter, take,map, distinct, of} from 'rxjs';
let misDatos$ = of(1,8,2,4,3,5,7,2,6,8)
  .pipe(
    filter( x => x % 2 === 0),
    distinct()
  )
  .subscribe(x => console.log(x));




// const misDatosTransformados$ =  misDatos$
// .pipe(
//   map( x => 'hola'),
//   take(3)
  
// )

// misDatosTransformados$
// .subscribe(
//   valor => console.log(valor)
// )




