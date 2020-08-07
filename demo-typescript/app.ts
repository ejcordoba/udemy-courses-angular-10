//Función auto-invaocada para evitar errores de variables reutilizadas
(function(){

    // Si declaramos la función en una constante no podremos sobreescribir la declaración de la función
    const miFuncion = function( a: string) {
        return a.toUpperCase();
    }
    //La misma función en versión "Función de flecha", si sólamente se va a retornar una línea de código se pueden ahorrar las llaves y el return
    const miFuncionF = ( a: string ) =>  a.toUpperCase();

    console.log( miFuncion('Normal') );
    console.log( miFuncionF('Flecha') );




})();