import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from './../models/shopping-cart';

@Component({
  selector: 'app-shoppingcartsummary',
  templateUrl: './shoppingcartsummary.component.html',
  styleUrls: ['./shoppingcartsummary.component.css']
})
export class ShoppingCartSummaryComponent{
  @Input('cart') cart: ShoppingCart;
   constructor() { }
 
 }