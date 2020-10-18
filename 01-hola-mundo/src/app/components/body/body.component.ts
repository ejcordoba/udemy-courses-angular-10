import { Component } from '@angular/core';

/* Declaramos decorador para indicar que la clase HeaderComponen instanciará un componente */
@Component({
    selector: 'app-body', // Para llamar al componente mediante etiqueta en el html
    templateUrl:  './body.component.html'
})
export class BodyComponent { // indicamos export para poder llamarlo en app.module.ts

}
