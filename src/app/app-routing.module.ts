import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

const routes: Routes = [
  { path: '', component: MovieRatingComponent },
  { path: 'addmovie123', component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
