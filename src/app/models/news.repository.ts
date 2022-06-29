import { MovieRepository } from './movie.repository';
import { News } from './news';

export class NewsRepository {
  private news_array: News[];
  private movieRep: MovieRepository;
  constructor() {
    this.movieRep = new MovieRepository();
    this.news_array = [];
  }
  GetNews(): News[] {
    return this.news_array;
  }
  AddNews(news: News) {
    this.news_array.push(news);
  }
  DeleteNews(id: number) {
    this.news_array.splice(id, 1);
  }
}
