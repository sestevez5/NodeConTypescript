//------------------------------------------------------------------
// Ejemplo  2: Introducción a rxjs: Cosntrucción básica de observable, 
// observadores y modelos de subscripción
//------------------------------------------------------------------
import { Observable } from 'rxjs';

const observable1 = new Observable( observador => 
  {

  observador.next('hola');
  observador.next('Adiós');


  setTimeout(() => {

    observador.next('Nos vamos');
    observador.complete();
    
  }, 2000);

}
)


//Subscripción 1  (En dos pasos)
const observador1 = {
  next: v => console.log('Observador1: ', v),
  error: e => console.log("Observador1: Ha habido un error y es:", e),
  complete: () => console.log("Observador1: Ya he terminado"),
  
}

observable1.subscribe(observador1);


//Subscripción 2
observable1.subscribe( {
  next: v => console.log('Observador2:',v),
  error: e => console.log("Observador2: Ha habido un error y es:", e),
  complete: () => console.log("Observador2: Ya he terminado")
 
});

//Subscripción 3
observable1.subscribe(valor => console.log('Observador3: otro valor por aquíiiiiii'));


