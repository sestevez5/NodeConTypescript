// import { of, fromEvent, interval, merge,  } from 'rxjs';
// import { map, delay, mergeMap, concatMap, switchMap, exhaustMap, take } from './rxjs.js';


document.addEventListener("DOMContentLoaded", function(event){

 // Definir variables que representan elementos del DOM
 const botonLlamadaApiComentario = document.getElementById('botonLlamadaApiComentario');
 const botonLlamadaApiSecuencial = document.getElementById('botonLlamadaApiSecuencial');
 const botonLlamadaApiParametrizada= document.getElementById('botonLlamadaApiParametrizada');

 const inputId= document.getElementById('inputId');
 inputId.value=1;
 const inputDatos= document.getElementById('inputDatos');
 const limpiarLog=document.getElementById('limpiarLog');

 const botonLlamadaApiComentario$ = Rx.Observable.fromEvent(botonLlamadaApiComentario,"click");
 const botonLlamadaApiSecuencial$ = Rx.Observable.fromEvent(botonLlamadaApiSecuencial,"click");
 const botonLlamadaApiParametrizada$ = Rx.Observable.fromEvent(botonLlamadaApiParametrizada,"click");

var contador=0;

// Paso 0

botonLlamadaApiComentario$
    .subscribe( click => 
        {
            Rx.Observable.ajax("https://jsonplaceholder.typicode.com/comments/1")
            .map( valor => { return { id:valor.response.id, texto: valor.response.name}})
            .subscribe( valor => escribirLog(JSON.stringify(valor)));
        });

// botonLlamadaApiComentario$
//     .subscribe( click => 
//         {
//             Rx.Observable.ajax("https://jsonplaceholder.typicode.com/comments/1")
//             .map( valor => { return {id:valor.response.id, texto: valor.response.name}})
//             .subscribe( valor => escribirLog(JSON.stringify(valor) ));
//         });



// ----------------------------------------------------
// Paso 1: Sobre el operador AJAX
// ----------------------------------------------------
// botonLlamadaApiComentario$
// .subscribe( eventClick => 
//     {
//         Rx.Observable.ajax("https://jsonplaceholder.typicode.com/comments/1")
//         .map(dato => { return { id: dato.response.id, texto: dato.response.name}})
//         .subscribe(dato => escribirLog(JSON.stringify(dato)))
//     }
   
// );




// ----------------------------------------- 
// Primera aproximación
// Simular operadores mergeMap, exhaustMap, switchMap, concatMap
// ----------------------------------------- 
botonLlamadaApiSecuencial$
     .exhaustMap( eventClick => {
           
            contador++;
            escribirLog(contador);
            return Rx.Observable.ajax("https://jsonplaceholder.typicode.com/comments/"+contador)
                .map( 
                    respuesta => {return JSON.stringify({ id:respuesta.response.id, name: respuesta.response.name})}
                )
                .delay(Math.random()*2000);
       
                
     }

     )    
     .subscribe(dato => escribirLog(dato));
    
            
botonLlamadaApiParametrizada$
.subscribe( eventClick => 
    {
    Rx.Observable.ajax("https://jsonplaceholder.typicode.com/comments/"+inputId.value)
        .map( dato => { return {id:dato.response.id, texto: dato.response.name}})
        .subscribe(dato => escribirLog(JSON.stringify(dato)) );
    }
)


// escribirLog(JSON.stringify({id:dato.response.id, texto:dato.response.name}))




//-----------------------------------------
// Funciones auxiliares
//-----------------------------------------
limpiarLog.addEventListener("click", logOnClick);

function logOnClick(event){
     inputDatos.value=null;
 }
 
 
 function escribirLog(texto){   
     if (inputDatos.value) inputDatos.value = inputDatos.value + "\n-> " + texto;
     else inputDatos.value = "-> " + texto;
 }







})

