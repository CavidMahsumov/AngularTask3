import { Categories } from './category';

export class CategoryRepository {
  private categories: Categories[];
  constructor() {
    this.categories = [
      {
        Id: 1,
        name: 'Adventure',
      },
      {
        Id: 2,
        name: 'Romantic',
      },
      {
        Id: 3,
        name: 'Sci-Fi',
      },
      {
        Id: 4,
        name: 'Dram',
      },
    ];
  }
  GetCategories(): Categories[] {
    return this.categories;
  }
  GetCategoriesById(id: number): Categories | undefined {
    return this.categories.find((i) => i.Id == id);
  }
}
