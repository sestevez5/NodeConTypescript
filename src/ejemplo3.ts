//------------------------------------------------------------------
// Ejemplo3: Introducción a los operadores de creación de observables (I).
//------------------------------------------------------------------
import { from } from 'rxjs';

let miArray = [1,4,8,0]

function mostrarValoresDuplicadosTradicional(){

  miArray.forEach( valor => console.log("duplicado SIN observables:", 2 * valor))

}


function mostrarValoresDuplicadosObservables(){

  const miArray$ = from(miArray);

  miArray$.subscribe( valor => console.log("duplicado CON observables:", 2 * valor));

}

mostrarValoresDuplicadosTradicional();
mostrarValoresDuplicadosObservables();




