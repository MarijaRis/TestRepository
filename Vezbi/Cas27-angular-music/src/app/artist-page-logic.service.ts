import { Injectable } from '@angular/core';
import { ArtistRepositoryService } from '../app/artist-repository.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistPageLogicService {
  constructor(private artistRepo: ArtistRepositoryService) { }

  public getArtistPageData(artistName: string): Observable<any> {
    return new Observable((observer) => {
      const pageData = {
        artist: {},
        albums: ''
      };
      this.artistRepo.getArtist(artistName).subscribe(x => {
        pageData.artist = x;
      });
      // observable execution
      observer.next(pageData);
      observer.complete();
  });
    // return this.artistRepo.getArtist(artistName).pipe(map((artistData) => {
    //   const pageData = {
    //     artist: artistData,
    //     albums: ''
    //   };
    //   return pageData;
    // }));
  }
}
