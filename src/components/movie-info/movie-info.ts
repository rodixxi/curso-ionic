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

  likeMovie() {
    console.log(`Te gustó ${this.movie.title} 👍🏻`);
  }

  dislikeMovie() {
    console.log(`Que lástima que no te gustó ${this.movie.title} 😢`);
  }

}
