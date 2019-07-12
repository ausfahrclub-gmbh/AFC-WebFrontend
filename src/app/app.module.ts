import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { RatingComponent } from './components/movie-rating/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieRatingComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
