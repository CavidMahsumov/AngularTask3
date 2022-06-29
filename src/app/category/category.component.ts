import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  id: number;
  categories: Categories[];
  categoriesRep: CategoryRepository;
  constructor() {
    this.categoriesRep = new CategoryRepository();
    this.categories = this.categoriesRep.GetCategories();
  }
  GetClasses(idd: number) {
    return {
      active: this.id == idd,
    };
  }
  IdDefined(idd: number) {
    this.id = idd;
  }
  ngOnInit() {}
}
