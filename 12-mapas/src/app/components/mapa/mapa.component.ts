import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 41.4072567;
  lng = 2.1653522;

  constructor() {

    const nuevoMarcador = new Marcador(41.4072567, 2.1653522);

    this.marcadores.push( nuevoMarcador );

  }

  ngOnInit(): void {
  }

  agregarMarcador( evento ) {

    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcador );

  }

}
