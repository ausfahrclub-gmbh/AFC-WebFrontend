import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../models/movie.model';
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
export class MovieService {

  private url = environment.apiUrl + 'movies';

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get<Movie[]>(this.url);
  }

  postMovie(newMovie: Movie) {
    return this.http.post<Movie>(this.url, newMovie, httpOptions);
  }
}
