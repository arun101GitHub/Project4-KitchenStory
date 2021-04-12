//import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { ShoppingCart } from './../models/shopping-cart'
import { Component, Input } from '@angular/core'
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent  {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart ; 


  constructor(private cartService:ShoppingCartService) { }

  // ngOnInit(): void {
  // }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}