import { Component, OnInit } from '@angular/core';
import { CategoryListService } from 'src/app/services/category-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  pageTitle: string = 'Choose a Category'
  categories: any = [];

  constructor(private catListService: CategoryListService) { }

  ngOnInit(): void {
    this.catListService.getCategories().subscribe((list) =>{
      this.categories = list
    })
  }

}
