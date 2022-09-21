import { Component, OnInit } from '@angular/core';
import { IFilterModel } from 'src/app/models/IFilterModel';
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
  filterModel!: IFilterModel;
  isLoading: boolean;
  hasError: boolean;
  errorMessage!: string;

  constructor (private service: OrdersService) {
    this.pageModel = {currentPage: 1, pageSize:5, totalLength: 0};
    this.pageModel.currentPage = 1;
    this.isLoading = true;
    this.hasError = false;
  }
  onChanged(pageSize: number) {
    this.pageModel.pageSize = pageSize;
  }

  onChangedFilter(filterModel: IFilterModel)
  {
    if (!this.comparableFilterObjects(this.filterModel, filterModel))
    {
      this.setupNewPropetiesForFilterModel(filterModel);
      this.service.getOrders(this.filterModel).subscribe(result => {
        this.orders = result;
        this.pageModel.totalLength = result.length;
      });
    }
    
  }

  comparableFilterObjects(firstModel: IFilterModel, secondModel: IFilterModel): boolean {
    return firstModel.lastName == secondModel.lastName && 
           firstModel.order == secondModel.order;
  }

  setupNewPropetiesForFilterModel(filterModel: IFilterModel) {
    this.filterModel.lastName = filterModel.lastName;
    this.filterModel.order = filterModel.order;
  }

  ngOnInit(): void {
    this.filterModel = {lastName: '', order:''};
    this.service.getOrders(this.filterModel).subscribe(result => {
      if (typeof(result) === "string")
      {
        this.hasError = true;
        this.errorMessage = result;
      }
      else {
        console.log(result);
        this.orders = result;
        this.pageModel.totalLength = result.length;
      }
      
      this.isLoading = false;
    });
    this.pageModel.currentPage = 1;
    this.pageModel.pageSize = 5;
  }
}
