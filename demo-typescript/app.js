"use strict";
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(() => {
    //Para definir el tipo (tipado) de retorno de las promesas, vamos a definirlo tras los argumentos, indicando entre <> que tipo si hace el resolve (correcto)
    //:Promise<number>
    //
    const retirarDinero = (montoRetirar) => {
        //Suponiendo que la cantidad de dinero esté en un backend, en un servidor, y se tiene que retirar de manera asíncrona, porque tengo que verificar
        //si en el servidor tengo esa cantidad de dinero, entonces la tarea se podría retrasar unos segundos
        let dineroActual = 1000;
        //Retirar dinero devolverá una promesa
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                //dineroActual = dineroActual - montoRetirar; Siguiente línea version corta de esta línea de código
                dineroActual -= montoRetirar;
                //Una vez hecho el cálculo hago el resolve, no es obligatorio retornar algo, pero en este caso vamos a retornar el monto actual
                resolve(dineroActual);
            }
        });
    };
    //Para poder manejar la promesa tenemos que especificar en la función el then o el catch
    retirarDinero(500)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        //.catch( err => console.warn (err)); a continuación versión corta, porque solo estoy usando esa variable ahí
        .catch(console.warn);
})();
