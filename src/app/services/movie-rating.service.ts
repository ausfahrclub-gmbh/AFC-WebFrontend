import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MovieRating} from '../models/movie-rating.model';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
// ,'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieRatingService {

  private url = environment.apiUrl + 'movieRatings';

  constructor(private http: HttpClient) { }

  getAllRatings() {
    return this.http.get<MovieRating[]>(this.url);
  }

  postRating(newRating: MovieRating) {
    return this.http.post<MovieRating>(this.url, newRating, httpOptions);
  }
}
