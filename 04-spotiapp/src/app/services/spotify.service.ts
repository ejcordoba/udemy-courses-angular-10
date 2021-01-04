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
   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBMAjYA59yQOox2qI3E2t0BrXjObYO-00kpZNAqbRGIzBidws586Kuzpwt8kCDsusoyj82q5jU-1pcavhw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data => data['albums'].items ) );
   }

   getArtista( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBMAjYA59yQOox2qI3E2t0BrXjObYO-00kpZNAqbRGIzBidws586Kuzpwt8kCDsusoyj82q5jU-1pcavhw'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
      .pipe( map( data => data['artists'].items ) );
   }
}
