import { Component } from '@angular/core';

/* Declaramos decorador para indicar que la clase HeaderComponen instanciará un componente */
@Component({
    selector: 'app-header', // Para llamar al componente mediante etiqueta en el html
    template: `<h1>Header component</h1>`
})
export class HeaderComponent { // indicamos export para poder llamarlo en app.module.ts

}