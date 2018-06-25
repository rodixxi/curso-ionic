import { Component, Input } from '@angular/core';
//@ Models
import { MovieModel, MAX_MOVIE_SCORE } from "../../models/movie.model";

@Component({
  selector: 'movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoComponent {
  maxScore = MAX_MOVIE_SCORE;

  @Input() movie: MovieModel;

  constructor() {}

}
