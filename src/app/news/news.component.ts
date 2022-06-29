import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../models/movie.repository';
import { News } from '../models/news';
import { NewsRepository } from '../models/news.repository';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  categories: News[];
  categoriesRep: NewsRepository;
  movieRep: MovieRepository;
  constructor() {
    this.movieRep = new MovieRepository();
    this.categoriesRep = new NewsRepository();
    this.categories = this.categoriesRep.GetNews();
  }

  AddNews(title: any, auth: any, movie: any) {
    console.log('add');
    var arr: News = {
      Id: this.categories.length + 1,
      MovieId: movie.value,
      title: title.value,
      authors: auth.value,
      CreatedDate: new Date(),
      imageUrl: this.movieRep.GetMovieById(movie.value).imageUrl,
    };
    this.categoriesRep.AddNews(arr);
  }
  Delete(id: number) {
    this.categoriesRep.DeleteNews(id - 1);
  }
  ngOnInit() {}
}
