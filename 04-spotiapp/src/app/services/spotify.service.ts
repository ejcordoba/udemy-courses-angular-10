import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
  
  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRaIVRT5PL6E0D2zx8p-B0zB3nUKDXL2dVSwuroi4tdU0ml5Cil37qSLSxiYNtQJyQ1HOsntYoaH4y_Qg'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ) );
  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ) );    
  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);
      //.pipe( map( data => data['artists'].items ) );    
  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
      .pipe( map( data => data['tracks'] ) );    
  }

}
