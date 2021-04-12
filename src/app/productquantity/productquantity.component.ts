//import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from './../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-productquantity',
  templateUrl: './productquantity.component.html',
  styleUrls: ['./productquantity.component.css']
})
export class ProductquantityComponent  {

  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
  	this.cartService.addToCart(this.product);
  }

  removeFromCart() {
  	this.cartService.removeFromCart(this.product)
  }

}

  


