import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL: string = "http://localhost:8081/";
  constructor(private http: HttpClient) { };


  addCategory(category: Category) {
    return this.http.post(this.URL + 'category', category, { headers: { "content-type": 'application/json' }, responseType: "text" });
  }

  getAllCategories() {
    return this.http.get(this.URL + 'category');
  }

  delete(id: string) {
    return this.http.delete(this.URL + 'category' + '/' + id);
  }
  update(id: string, updatedBody: any) {
    const endpointURL = this.URL + 'category' + '/' + id;
    return this.http.put(endpointURL, updatedBody, { headers: { "content-type": 'application/json' }, responseType: "text" });
  }

}
