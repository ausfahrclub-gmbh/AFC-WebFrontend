import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MovieRating } from 'src/app/models/movie-rating.model';
import { Movie } from 'src/app/models/movie.model';
import {MovieRatingService} from '../../../services/movie-rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  @Input() movie: Movie;
  @Output() newMovieRating = new EventEmitter<MovieRating>();

  editMovieRating: MovieRating = {id: 0, user: '', movie: '', starRating: 0, comment: '', fellAsleep: '' };
  starRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private movieRatingService: MovieRatingService) { }

  ngOnInit() {
  }

  onRatingSubmit() {
    const {comment, starRating, fellAsleep} = this.editMovieRating;
    const rating: MovieRating = {
      id: undefined,
      user: '',
      movie: this.movie.movieName,
      comment: comment,
      starRating: starRating,
      fellAsleep: 'Y'
    };

    this.newMovieRating.emit(rating);
  }

}
