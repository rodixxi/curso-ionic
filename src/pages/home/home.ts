import { Component } from '@angular/core';
//@ Models
import { MovieModel, Ratings } from "../../models/movie.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  montyPython: MovieModel;

  constructor() {

  }

  ngOnInit() {
    this.montyPython = new MovieModel({
      title: 'Monty Python and the Holy Grail',
      genre: 'Comedy',
      phrase: {
        quote: 'So unnecessarily gorgeous',
        author: 'Tom Huddleston'
      },
      rating: Ratings.ATP
    });
    this.montyPython.posterUrl = 'https://img.reelgood.com/content/movie/cb7f9b74-5876-4f1b-a1d6-496246b229f8/poster-780.webp';
    this.montyPython.sinopsis = 'The Knights of the Round Table set off in search of the Holy Grail on foot, as their lackeys make clippety-clop sounds with coconut shells. A plague-ridden community, ringing with the cry of "bring out your dead," offers its hale and hearty citizens to the body piles. A wedding of convenience is attacked by Arthur\'s minions while the pasty-faced groom continually attempts to burst into song. The good guys are nearly thwarted by the dreaded, tree-shaped "Knights Who Say Ni!" A feisty enemy warrior, bloodily shorn of his arms and legs in the thick of battle, threatens to bite off his opponent\'s kneecap. A French military officer shouts such taunts as "I fart in your general direction" and "I wave my private parts at your aunties." Rabbits are a particular obsession of the writers this time around, ranging from the huge Trojan Rabbit to the "killer bunny" that decapitates one of the knights.';
    this.montyPython.score = 9.75;
    this.montyPython.availableNow = false;
  }

}
