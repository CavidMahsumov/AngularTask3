import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movieres: MovieRepository;
  movies;
  constructor() {
    this.movieres = new MovieRepository();
    this.movies = this.movieres.GetMovies();
  }

  ngOnInit() {}
}
