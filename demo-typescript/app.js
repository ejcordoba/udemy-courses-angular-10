"use strict";
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(() => {
    //Convención de nombres de clases, capitalizar palabras
    class Avenger {
        constructor() {
            //Nombre: tipo
            this.nombre = "Sin nombre";
        }
    }
    const antman = new Avenger();
    console.log(antman);
})();
