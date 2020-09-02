//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{
//Las promesas, básicamente, nos sirven para ejecutar un código sin bloquear el código de la aplicación

    console.log('Inicio');
//Si definimos la promesa así nos da un error porque le falta una libreria, así que en el tsconfig.json tenemos que cambiar de es5 al es6
//'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.ts(2585)
//Dentro de la promesa necesito mandar una función que lleve dos argumentos, dentro de esos argumentos necesito mandar dos funciones
//Una que se va a llamar usualmente "resolve", que es lo que vamos a retornar cuando todo funciona correctamente
//Y otra que se va a llamar "reject", que llamaremos si sucede algún error
    const prom1 = new Promise( ( resolve, reject) => {

        setTimeout(() => {
            //resolve('Se terminó el timeout');
            //Si ejecutamos el código aparecerá el console.log inicio, luego ejecutará la promesa, pero como tiene un retraso de 1 segundo no interrumpe el código, ejecuta el console.log de fin y luego aparece el mensaje de prom1
            reject('Se terminó el timeout');
            //Si ejecutamos el código aparecerá el console.log inicio, luego ejecutará la promesa, pero como tiene un retraso de 1 segundo no interrumpe el código, ejecuta el console.log de fin y luego aparece el error (sin atrapar, sin catch) de prom1
        }, 1000);

    });
    //Llamamos a la promesa prom1, tenemos tres opciones: Symbol, catch y then, Symbol es un identificador
    //Then es lo que yo quiero ejecutar cuando se realiza todo exitosamente y catch cuando sucede un error
    prom1
        .then( mensaje => console.log( mensaje ))
        .catch( err => console.warn(err));//console.warn se muestra en amarillo
    console.log('Fin');
})();