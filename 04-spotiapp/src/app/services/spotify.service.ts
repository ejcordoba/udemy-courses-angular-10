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
      'Authorization': 'Bearer BQA8T9W7bdw266ilzogCBlseFNIB5yMEpZ4IQTPbRBRH51QsV2RLGwbiyaRQi6gj8X2ZdFUJ4u9A8JI6kZU'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe( data => {
        console.log(data);
      });
   }
}
