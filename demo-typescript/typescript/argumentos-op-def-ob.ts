//Función auto-invaocada para evitar errores de variables reutilizadas
(function(){
    //quien = argumento obligatorio
    //momento = argumento opcional
    //objeto = argumento por defecto (inicializado con un valor por defecto)
    // El valor por defecto debería ser el último argumento
    function activar( quien: string,
                      momento?: string,
                      objeto:string = 'batiseñal'
                      ) {
        if ( momento ) {
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
        } else {
            console.log(`${ quien } activó la ${ objeto }`);
        }

    }
    activar('Gordon','tarde');
})();