import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular5-data-table';
//import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
  	.subscribe(products => {
  		 this.products = products;
  		this.intializeTable(products);
  	});
  }
  private intializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
  this.tableResource.query({ offset: 0})
   .then(items => this.items = items);
  this.tableResource.count()
   .then(count => this.itemCount = count);
}

  reloadItems(params) {
  if(!this.tableResource) return;
  this.tableResource.query(params)
   .then(items => this.items = items);
}
  ngOnInit(): void {
  }
  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  filter(query: string) {
  	let filteredProducts = (query) ? 
  		this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
  		this.products;

  	this.intializeTable(filteredProducts);
  }
}

