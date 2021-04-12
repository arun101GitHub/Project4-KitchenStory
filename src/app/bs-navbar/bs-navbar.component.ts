import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth.service';
import { AppUser } from '../../app/models/app-user';
import { ShoppingCartService } from '../../app/shopping-cart.service';
import { ShoppingCart } from '../../app/models/shopping-cart';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private auth:AuthService, private cartService:ShoppingCartService) {}

  logout() {
  	this.auth.logout();
  }

  async ngOnInit() {
  	this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  	this.cart$ =  await this.cartService.getCart(); 	
  }
}