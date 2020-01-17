import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie.model';
import {MovieRating} from '../../models/movie-rating.model';
import {MovieRatingService} from '../../services/movie-rating.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.sass']
})
export class MovieRatingComponent implements OnInit {

  movies: Movie[];
  name = '';

  // timer = setInterval(() => {
  //   console.log('timer');
  //   this.coolingDown = true;
  //   clearTimeout(this.timer);
  // }, 2000);

  coolingDown = false;


  constructor(private movieService: MovieService, private movieRatingService: MovieRatingService, private toastrService: ToastrService) { }

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

          if (data['rowsAffected'] == 1) {
            this.toastrService.show('Raiting submitted');
          } else {
            this.toastrService.show('Raiting failed. Please try again or contact afc@outlook.at');
          }

        }, (error) => {

          if (error.message.includes('Internal Server Error')) {
            alert('Rating not submitted -> You Already rated this Movie!!!');
          } else {
            alert('Could not submit rating: ' + error.message);
          }

        });
    } else {
      this.toastrService.show('Please enter your name!');
    }
  }

}
