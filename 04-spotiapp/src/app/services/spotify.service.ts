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
      'Authorization': 'Bearer BQB1HtykVCPIJV8PxTeLv5AXFSfm3p4wXs2AV2eiCkNs7qEtmxuzL-fnZ2iBg9Yam5yU1btB3mC2tfuevl4'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ) );
  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ) );    
  }

}
