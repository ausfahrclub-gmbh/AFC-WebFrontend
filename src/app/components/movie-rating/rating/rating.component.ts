import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieRating } from 'src/app/models/movie-rating.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieRatingService } from '../../../services/movie-rating.service';
import { createGlobalSettings } from '@angular/cli/utilities/config';
import { MovieOverallRating } from '../../../models/movie-overall-rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  @Input() movie: Movie;
  @Output() newMovieRating = new EventEmitter<MovieRating>();

  editMovieRating: MovieRating = { id: 0, user: '', movie: '', starRating: 0, comment: '', fellAsleep: '' };
  starRatingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  movieOverallRating: MovieOverallRating = { movie: '', rating: 0, ratingAmount: 0 };

  constructor(private movieRatingService: MovieRatingService) { }

  ngOnInit() {
    this.movieRatingService.getRatingForMovie(this.movie.movieName).subscribe(
      (data) => {
        // tmp
        if (data.hasOwnProperty('movie')) {
          this.movieOverallRating = data;
        }
        console.log(this.movieOverallRating);

      }, (error) => {
        alert('Could not get overall movie ratings: ' + error.message);
      }
    );
  }

  onRatingSubmit() {
    let { comment, starRating, fellAsleep } = this.editMovieRating;

    if (this.editMovieRating.fellAsleep === true) {
      fellAsleep = 'Y';
    } else if (this.editMovieRating.fellAsleep === false) {
      fellAsleep = 'N';
    } else {
    }

    const rating: MovieRating = {
      id: undefined,
      user: '',
      movie: this.movie.movieName,
      comment: comment,
      starRating: starRating,
      fellAsleep: fellAsleep

    };


    this.newMovieRating.emit(rating);
  }

}
