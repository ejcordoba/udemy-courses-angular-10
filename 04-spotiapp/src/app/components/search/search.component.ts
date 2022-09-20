import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas( termino )
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  };

}
