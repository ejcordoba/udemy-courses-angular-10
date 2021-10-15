import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditsResponse } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;

  constructor( private activatedRoute: ActivatedRoute, 
               private peliculasService: PeliculasService, 
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;
    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      console.log( movie );
      if ( !movie ) {
        this.router.navigateByUrl('/');
        return;
      }
      this.pelicula = movie;
    });
    this.peliculasService.getCast( id ).subscribe( credits => {
      console.log( credits );
      if ( !credits ) {
        this.router.navigateByUrl('/');
        return;
      }
    });
  }

  onRegresar() {
    this.location.back();
  }

}
