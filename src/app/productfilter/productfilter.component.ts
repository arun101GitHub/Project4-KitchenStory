import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../app/category.service';


@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductFilterComponent {
  categories$;
  @Input('category') category; 
  constructor(categoryService: CategoryService) { 
  	this.categories$ = categoryService.getCategories();
  }

}