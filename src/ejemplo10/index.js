document.addEventListener('DOMContentLoaded', (event) => {ejecutar();})


function ejecutar() {

    // Definir variables que representan elementos del DOM
    const boton1= document.getElementById('boton1');
    const boton2= document.getElementById('boton2');
    const input = document.getElementById('input');
    const log   = document.getElementById('log');

    //Enlace tradicional a eventos
    // boton1.addEventListener("click", boton1OnClick);
    log.addEventListener("click", logOnClick);
    
  
    
    // Enlace haciendo uso de progrmación reactiva
     const clickBoton1$ = Rx.Observable.fromEvent(boton1,"click");
     const clickBoton2$ = Rx.Observable.fromEvent(boton2,"click");



     

    // clickBoton1$.subscribe( dato => escribirLog(dato.target.id));

    Rx.Observable.merge(clickBoton1$,clickBoton2$)
    
        .subscribe(
            v => { console.log('[CON OBSERVABLES]: Se ha pulsado el botón: '+v.target.id) },
            e => { console.log(e) },
            () => { console.log('complete') }
        );



    function boton1OnClick(event){
        escribirLog(event.target.id);
    }

    function logOnClick(event){
        input.value=null;
    }
    
    
    function escribirLog(texto){   
        if (input.value) input.value = input.value + "\n-> " + texto;
        else input.value = "-> " + texto;
    }


}


