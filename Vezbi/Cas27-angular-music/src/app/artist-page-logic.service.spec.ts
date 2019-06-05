import { TestBed } from '@angular/core/testing';

import { ArtistPageLogicService } from './artist-page-logic.service';

describe('ArtistPageLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistPageLogicService = TestBed.get(ArtistPageLogicService);
    expect(service).toBeTruthy();
  });
});
