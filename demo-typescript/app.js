"use strict";
//Función auto-invaocada para evitar errores de variables reutilizadas
(function () {
    var mensaje = "Hola";
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    var cualquiercosa;
    //let cualquiercosa: string | number; <-- asignar varios tipos a una misma variable con un pipe
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
    spiderman = {
        nombre: 'Juan',
        edad: 40
    };
    /*  var mensaje  = "Hola";
     console.log(mensaje) */
})();
/*
function saludar( nombre:string ) {
    console.table( 'Hola ' + nombre ); // Hola Logan
}
const wolverine = {
    nombre: 'Logan'
};
saludar( wolverine.nombre );*/
