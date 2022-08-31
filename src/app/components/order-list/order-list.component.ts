import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { IPageModel } from 'src/app/models/IPageModel';
import { OrdersService } from 'src/app/services/orders.service';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: IOrder[] = [];
  pageModel!: IPageModel;

  constructor (private service: OrdersService) {
    this.pageModel = {currentPage: 1, pageSize:5, totalLength: 0};
    this.pageModel.currentPage = 1;
  }
  onChanged(pageSize: number) {
    this.pageModel.pageSize = pageSize;
  }
  ngOnInit(): void {
    this.service.getOrders().subscribe(result => {
      this.orders = result;
      this.pageModel.totalLength = result.length;
    });
    this.pageModel.currentPage = 1;
    this.pageModel.pageSize = 5;
  }
}
