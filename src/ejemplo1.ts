//------------------------------------------------------------------
// Ejemplo1: Implementación del patrón Observador
//------------------------------------------------------------------
interface Observador {
  notificar(mensaje:string): void;
}

class Observable {

  // Registra la colección de observadores que se han suscrito.
  private observadores: Observador[]=[];

  // Método que suscribe a un observador.
  anyadirObservador(nuevoObservador: Observador) {
    this.observadores.push(nuevoObservador);
  }

  // Método que realiza una notificación a todos los observadores suscritos.
  notificarAObservadores(mensaje: string){
   this.observadores.forEach( obs => obs.notificar(mensaje) );
  }

  contenido: string='Cadena inicial';

  cambiarContenido(nuevoContenido: string) {
    console.log("-- DESDE OBSEVABLE: se modifica el contenido de <"+this.contenido+"> a <"+nuevoContenido+">" );
    this.contenido = nuevoContenido;
    this.notificarAObservadores(this.contenido);
    console.log("\n");
  }

}



class ObservadorTipo1 implements Observador {
  notificar(mensaje: string): void {
      console.log("Desde Observador tipo 1: Que pasa, Pepe");
  }
}

class ObservadorTipo2 implements Observador {
  notificar(mensaje: string): void {
      console.log(`Desde Observador tipo 2: El nuevo contenido es ${mensaje}`);
  }
}


//------------------------------------------------------
//------ PROGRAMA --------------------------------------
//------------------------------------------------------

let miObservable = new Observable();
let obs1: ObservadorTipo1 = new ObservadorTipo1();
let obs2: ObservadorTipo2 = new ObservadorTipo2();



miObservable.anyadirObservador(obs1);
miObservable.anyadirObservador(obs2);

miObservable.cambiarContenido("Primer mensaje");

setTimeout(() => {
  miObservable.cambiarContenido("Segundo mensaje")
}, 5000);








