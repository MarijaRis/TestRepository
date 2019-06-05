import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRenderComponent } from './artist-render.component';

describe('ArtistRenderComponent', () => {
  let component: ArtistRenderComponent;
  let fixture: ComponentFixture<ArtistRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
