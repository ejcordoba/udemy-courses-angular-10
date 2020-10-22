import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService ) { // _heroesService es el alias que tendrá el servicio
    console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes);
  }

}
