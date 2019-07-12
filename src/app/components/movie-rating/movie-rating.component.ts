import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie.model';
import {MovieRating} from '../../models/movie-rating.model';
import {MovieRatingService} from '../../services/movie-rating.service';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.sass']
})
export class MovieRatingComponent implements OnInit {

  movies: Movie[];
  name = '';

  constructor(private movieService: MovieService, private movieRatingService: MovieRatingService) { }

  ngOnInit() {
      this.movieService.getAllMovies().subscribe(
      (data) => {
         this.movies = data;
      }, (error) => {
        alert('Could not load movies: ' + error.message);
     });
  }

  ratingAdded(rating: MovieRating) {
    if (this.name.length !== 0) {

      rating.user = this.name;
      this.movieRatingService.postRating(rating).subscribe(
        (data) => {
          console.log('Data Posted:', data);
        },(error) => {
          alert('Could not submit rating: ' + error.message);
        });
    } else {
      alert('Enter name du omma');
    }
  }

}
