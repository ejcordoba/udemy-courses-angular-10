import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ){
      console.log('Formulario no válido');
      return;
    }
    // console.log(form);
    // console.log(this.heroe);
    this.heroesService.crearHeroe( this.heroe )
      .subscribe( resp => {
        console.log(resp);
      });

  }
}
