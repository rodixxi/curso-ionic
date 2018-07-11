import { Component } from '@angular/core';
//@ Models
import { MovieModel } from "../../models/movie.model";
import { MoviesProvider } from "../../providers/movies/movies";
import { NavController, NavParams } from "ionic-angular";
import { MovieDetailPage } from "../movie-detail/movie-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: MovieModel[];
  user: string;

  constructor(private moviePrv: MoviesProvider,
              private navParams: NavParams,
              private navCtrl: NavController) {}

  ngOnInit() {
    this.movies = this.moviePrv.getMovies();
    this.user = this.navParams.data.user;
  }

  openMovieDetail(movie: MovieModel) {
    this.navCtrl.push(MovieDetailPage, {movie})
  }
}
