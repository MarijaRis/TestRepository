import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../entities/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistRepositoryService {

  constructor(private http: HttpClient) { }

  public getArtist(artistName: string): Observable<Artist> {
    try {
      return this.http.get<any>('http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist='
       + artistName + '&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json')
       .pipe(map(result => {
          console.log('from repo', result);
          return new Artist(result.artist);
         }));
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

