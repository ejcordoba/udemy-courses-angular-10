"use strict";
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(() => {
    //Convención de nombres de clases, capitalizar palabras
    class Avenger {
        //Constructor: función que se ejecuta cuando se crea una nueva instancia de una clase
        constructor(nombre, equipo) {
            this.nombre = nombre; //this apunta a la propiedad nombre de la clase Avenger, y será igual al valor que se le pasa al constructor
            this.equipo = equipo;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
