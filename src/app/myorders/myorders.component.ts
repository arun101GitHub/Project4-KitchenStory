import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from './../auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = authService.user$.switchMap(u => orderservice.getOrdersByUser(u.uid));
  }

  ngOnInit(): void {
  }

}
