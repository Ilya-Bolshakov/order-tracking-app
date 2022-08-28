import { Component, OnInit } from '@angular/core';
import { IOrder } from './models/IOrder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'order-tracking-app';
  orders: IOrder[] = [];




  ngOnInit(): void {
    this.orders = orders-
  }


}
