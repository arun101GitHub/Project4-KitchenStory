import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent {
  orders$;
  constructor(private orderservice: OrderService) {
    this.orders$ = OrderService.getOrders();
   }

 

}
