import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDt7vsa4s73U0L4PpmZEHm-PwckR1TWg4AP30YMDoMNB3ijj714erHbSt6mVXZaDjvLj_OBKCPqft3fgno'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

   }

   getArtista( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDt7vsa4s73U0L4PpmZEHm-PwckR1TWg4AP30YMDoMNB3ijj714erHbSt6mVXZaDjvLj_OBKCPqft3fgno'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });

   }
}
