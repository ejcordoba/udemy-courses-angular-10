import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();
    
    //const lista1 = new Lista('Recolectar piedras del infinito');
    //const lista2 = new Lista('Héroes a desaparecer');
   
    //this.listas.push(lista1,lista2);

    //console.log(this.listas);
  }

  crearLista( titulo: string ){

    const nuevaLista = new Lista( titulo );
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;

  }

  obtenerLista( id: string | number ) {

    id = Number(id);

    return this.listas.find( listaData => listaData.id === id );// Versión corta de función de flecha, un solo "return" implícito

  }

  guardarStorage() {

    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarStorage() {

    if ( localStorage.getItem('data') ){
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = []; // Realmente esto se podría obviar porque al iniciar el servicio ya tenemos inicializado el array vacío
    }
  }

}
