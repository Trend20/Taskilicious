import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http: HttpClient) { }

  // get categories
  getCategories(){
    return this.http.get('https://63761992b5f0e1eb850298da.mockapi.io/categories');
  }
}
