import { Component, OnInit } from '@angular/core';
import { ArtistPageLogicService } from '../artist-page-logic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-render',
  templateUrl: './artist-render.component.html',
  styleUrls: ['./artist-render.component.css']
})
export class ArtistRenderComponent implements OnInit {
  pageData = null;
  artistName = 'Ceca';
  constructor(private artistLogic: ArtistPageLogicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.artistName = this.route.snapshot.paramMap.get('artistName') || this.artistName;
    this.renderArtistPage(this.artistName);
  }

  renderArtistPage(artist) {
    this.artistLogic.getArtistPageData(artist).subscribe(result => {
      this.pageData = result;
      console.log('render', this.pageData);
    });
  }

  changeArtist(artistName) {
    this.renderArtistPage(artistName);
  }
}
