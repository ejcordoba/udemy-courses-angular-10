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

    return this.http.post(`${this.url}/heroes.json`, heroe ) //el metodo post requiere, al menos, la url y el cuerpo
      .pipe(
        map( (resp: any ) => {
          heroe.id = resp.name;
          return heroe;
        })
      );

  }
}
