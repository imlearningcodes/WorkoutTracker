import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-workout',
  templateUrl: './category-workout.component.html',
  styleUrls: ['./category-workout.component.css']
})
export class CategoryWorkoutComponent implements OnInit {

  category: Category = new Category();
  categoryArray: any;
  searchedKeyword: string;
  constructor(private categoryService: CategoryService) { }
  saveCategory() {
    if(!this.category.title)
    {
      Swal.fire("Category title cannot be blanked" );
      return;
    }
    const observable = this.categoryService.addCategory(this.category);
    observable.subscribe(response => {
      console.log(response);
      Swal.fire("category added succesfully..");
      window.location.reload();
    },
      error => {
        console.log(error);
        Swal.fire("error happened" + error.error)
      })
  }

  deleteCategory(id: string, index: number) {
    let ask = confirm("Please confirm for deletion: ");
    if (!ask) {
      return;
    }
    const observable = this.categoryService.delete(id);
    observable.subscribe(response => {
      this.categoryArray.splice(index, 1);
      Swal.fire("Category deleted...")},
      error => {
        console.log(error);
        Swal.fire("Category Not Deleted - " + error.error)
      });
  }

  update1(index: number, id: string) {
    console.log(this.categoryArray[index].title);
    let ask = prompt("Enter category");
    if (ask == '') {
      return;
    }
    this.category.title = ask;
    console.log(this.category.title);
    const observable = this.categoryService.update(id, this.category);
    observable.subscribe(response => {
      this.categoryArray[index].title = ask;
      Swal.fire("Category updated");
    },
      error => {
        Swal.fire("Error Occured - " + error.error);
      });
  }

  ngOnInit(): void {
    const observable = this.categoryService.getAllCategories();
    observable.subscribe(response => {
      console.log(response);
      this.categoryArray = response;
    });
  }
}
