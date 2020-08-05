//Función auto-invaocada para evitar errores de variables reutilizadas
(function(){

    let mensaje: string = "Hola";
    let numero: number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();
    let cualquiercosa;
    //let cualquiercosa: string | number; <-- asignar varios tipos a una misma variable con un pipe
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    
    let spiderman = {
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

