import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  order: IOrder;
  hasError: boolean;
  error!: string;

  constructor(private orderService: OrdersService, private router: Router) {
    this.order = {
      Orderid: -1,
      Firstname:'',
      Lastname: '',
      Visitdate: new Date,
      Ordername: '',
      Description: '',
      Updatedate: new Date
    };
    this.hasError = false;
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.orderService.addOrder(this.order).subscribe({
        next: () => {
          this.router.navigate(["/orderList"]);
          this.hasError = false;
        },
        error: (http: HttpErrorResponse) => {
          this.hasError = true;
          this.error = http.error.error;
        }
      });
    }
  }

}
