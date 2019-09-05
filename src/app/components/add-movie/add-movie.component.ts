import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass']
})
export class AddMovieComponent implements OnInit {

  newMovie: Movie = {movieName : '', genre: '', length: 0, releaseDate: null, cinema: ''}

  dateString = '';

  cinemas: string[] = [
   'Cineplexx',
   'Megaplexx',
   'Twitch'
  ];

  constructor(private movieService: MovieService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.newMovie.releaseDate = new Date(this.dateString);
    console.log(this.newMovie);
    
    this.movieService.postMovie(this.newMovie).subscribe((data) => {
    
      if(data["rowsAffected"] == 1){           
        this.toastrService.show('Movie added');
      }         
      else{
        this.toastrService.show('Failed to add movie. Please try again or contact afc@outlook.at');
      }

    }, (error) =>{
      this.toastrService.show('Something went wrong :( See log for more details');
      console.log("Could not post movie: " + error.message); 
    });
  }
}
