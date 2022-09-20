import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public textoBusqueda: string = '';
  public moviesResult: Movie[] = [];
  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.textoBusqueda = params.texto;
      this.peliculasService.buscarPeliculas( params.texto ).subscribe( movies => {
        this.moviesResult = movies;
      })
    })
  }

}
