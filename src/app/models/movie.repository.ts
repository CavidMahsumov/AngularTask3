import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        Id: 1,
        title: 'Shazam',
        description: 'Shazam description',
        imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/shazam_31.jpg',
      },
      {
        Id: 2,
        title: 'Strom boy',
        description: 'Strom boy description',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/add5e152104049971187381a33cfb53bd2e6d99e2f1a65438d17b245e0bf5839._RI_V_TTW_.jpg',
      },
      {
        Id: 3,
        title: 'Amazing Grace Aretha Franklin',
        description: 'Amazing Grace Aretha Franklin description',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BODQzNTMyNTY2NF5BMl5BanBnXkFtZTgwNDM5MTg1NzM@._V1_.jpg',
      },
      {
        Id: 4,
        title: 'High Life',
        description: 'High life description description',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BMDNjN2NjYmItMjAyZi00NmNkLWJmYTQtYzcwZGRiM2RmNGNlXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_.jpg',
      },
    ];
  }
  GetMovies(): Movie[] {
    return this.movies;
  }
  GetMovieById(id: number): Movie | undefined {
    return this.movies.find((i) => i.Id == id);
  }
}
