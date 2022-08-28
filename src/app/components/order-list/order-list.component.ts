import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: IOrder[] = [];

  constructor (private service: OrdersService) {
  }

  ngOnInit(): void {
    this.orders = this.service.getOrders();
  }

}
