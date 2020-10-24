import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {}; // Variable local para mostrar en el template

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params =>{ // Está constantemene escuchando cambios en params, como en las rutas se definió que se pasaría el id, eso es lo que recibe
      this.heroe = this._heroesService.getHeroe(params['id']);
    });

   }
}
