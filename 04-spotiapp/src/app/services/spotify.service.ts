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
      'Authorization': 'Bearer BQCCaTPlAifwVdqqIb_6npnyYt0cGGsMM4K9fIP9udPu2oeNOhPuZLXQZKvk0pbKTkJ_awD3Yg3qnUnBtNE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

   }
}
