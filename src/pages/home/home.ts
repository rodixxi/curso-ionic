import { Component } from '@angular/core';
//@ Models
import { MovieModel } from "../../models/movie.model";
import { MoviesProvider } from "../../providers/movies/movies";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: MovieModel[];
  user: string;

  constructor(private moviePrv: MoviesProvider, private navParams: NavParams) {}

  ngOnInit() {
    this.movies = this.moviePrv.getMovies();
    this.user = this.navParams.data.user;
  }

  action(actionName: string, movie: MovieModel) {
//    const hasAlreadySeenIt = this.moviesSeen.findIndex(m => m.title === movie.title)
    switch (actionName) {
      case 'like':
        console.log(`Te gustó ${movie.title} 👍🏻`);
        movie.userLiked = true;
//        if(hasAlreadySeenIt < 0) this.moviesSeen.push(movie);
        break;
      case 'dislike':
        console.log(`Que lástima que no te gustó ${movie.title} 😢`);
        movie.userLiked = false;
//        if(hasAlreadySeenIt < 0) this.moviesSeen.push(movie);
        break;
      default:
        console.error('Acción incorrecta!');
    }
  }

}
