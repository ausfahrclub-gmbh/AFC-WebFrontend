import { Component, OnInit, Input } from '@angular/core';
import { MovieRating } from 'src/app/models/movie-rating.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  newRating: MovieRating
  @Input MovieService movieService 
  movies: Movie[]

  starRating: [1, 2, 3, 4, 5]
  
  constructor(private movieService: MovieService, private ) { }

  ngOnInit() {
  
  }

}
