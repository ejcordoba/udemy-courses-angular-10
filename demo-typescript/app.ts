//Función auto-invaocada para evitar errores de variables reutilizadas
(function(){

    const nombre = "Eduardo";
    const apellido = "Córdoba";
    const edad = 38;
    

    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    // Eduardo Córdoba (Edad: 38)
    const salida = `${ nombre } \n${ apellido } \n( ${ edad } )`;
    console.log(salida);

})();