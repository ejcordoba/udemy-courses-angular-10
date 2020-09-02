//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{

    //Interfaces: Reglas que queremos que cumpla un objeto para que pueda usarse como un tipo
    //Es como crear un tipo de dato "tonto", no se pueden definir la funcionalidad de los métodos internamente
    //Son manera de definir reglas para que nosotros u otros compañeros sigan si quieren usar un tipo

    interface Xmen {//no hay código equivalente en js, cuando se compila no aparece nada en el .js, son puramente para ts
        nombre: string;
        edad: number;
        poder?: string;//Declarando la variable con ?: especificamos que esta variable es opcional
    }
    const enviarMision = ( xmen: Xmen ) => {//definido como tipo de interfaz customizada anteriormente

        console.log(`Enviando a ${ xmen.nombre } a la misión`);

    }

    const regresarAlCuartel = ( xmen: Xmen ) => {

        console.log(`Enviando a ${ xmen.nombre } a la misión`);

    }

    const wolverine: Xmen = {//Definiendo el interfaz a la hora de declarar el objeto me aseguro que se cumplan las condiciones de tipado
        nombre: 'Logan',
        edad: 60
    }
    enviarMision( wolverine );
    regresarAlCuartel( wolverine );

})();