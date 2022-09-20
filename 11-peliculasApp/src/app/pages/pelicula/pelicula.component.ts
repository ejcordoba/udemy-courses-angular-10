import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast, CreditsResponse } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute, 
               private peliculasService: PeliculasService, 
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([

      this.peliculasService.getPeliculaDetalle( id ),
      this.peliculasService.getCast( id )

    ]).subscribe( ( [pelicula, cast] ) => {
      if ( !pelicula ) {
        this.router.navigateByUrl('/');
        return;
      }
      this.pelicula = pelicula;
      this.cast = cast.filter( actor => actor.profile_path );
    });
  }

  onRegresar() {
    this.location.back();
  }

}
