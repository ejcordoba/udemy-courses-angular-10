import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-84410-default-rtdb.europe-west1.firebasedatabase.app';

  constructor( private http: HttpClient) { }

  crearHeroe( heroe: HeroeModel ) {

    return this.http.post(`${this.url}/heroes.json`, heroe ) // el metodo post requiere, al menos, la url y el cuerpo
      .pipe(
        map( (resp: any ) => {
          heroe.id = resp.name;
          return heroe;
        })
      );

  }

  actualizarHeroe( heroe: HeroeModel ) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${ heroe.id }.json`, heroeTemp );

  }

  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
      .pipe(
        map( this.crearArray)
      );
  }

  private crearArray( heroesObj: object ) {

    const heroes: HeroeModel[] = []; // Creamos un array vacio que será el que devolvamos con todos los heroes

    if ( heroesObj === null ) { return []; } // Verificamos que si la respuesta http está vacía (no hay heroes en la BD) no de error

    Object.keys( heroesObj ).forEach( key => { // Recorremos el objeto de la respuesta usando su referencia (key) y añadiendolos al array

      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push( heroe );
    });

    return heroes;
  }
}
