import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('Constructor del home cargado');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (respuesta:any) => {
        this.paises = respuesta;
        console.log(respuesta);
      })
  }

  ngOnInit(): void {
  }

}
