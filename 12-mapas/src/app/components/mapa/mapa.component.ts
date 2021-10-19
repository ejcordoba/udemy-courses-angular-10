import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 41.4072567;
  lng = 2.1653522;

  constructor() { }

  ngOnInit(): void {
  }

}
