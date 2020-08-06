//Función auto-invaocada para evitar errores de variables reutilizadas
(function(){

    function getEdad() {
        return 100 + 100 + 300;
    }
    const nombre = "Eduardo";
    const apellido = "Córdoba";
    const edad = 38;
    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    // Eduardo Córdoba (Edad: 38)
    const salida = `${ nombre } \n${ apellido } \n( ${ edad + 100 } ) funcion edad= ${getEdad()}`;
    console.log(salida);

})();