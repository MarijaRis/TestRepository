import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistRenderComponent } from './artist-render/artist-render.component';

const routes: Routes = [
  { path: 'artists', component: ArtistRenderComponent },
  { path: 'artists/:artistName', component: ArtistRenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
