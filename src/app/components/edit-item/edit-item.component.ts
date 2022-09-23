import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  id!: number;
  order!: IOrder;
  hasError: boolean;
  error!: string;
  constructor(private activateRoute: ActivatedRoute, private service: OrdersService, private router: Router) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.hasError = false;
    this.order = {
      orderid: 0,
      firstname:'',
      lastname: '',
      visitdate: new Date,
      ordername: '',
      description: '',
      updatedate: new Date
    };
   }

  ngOnInit(): void {
    this.service.getOrder(this.id).subscribe(result => {
      this.order = result;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.order);
      this.service.editOrder(this.order).subscribe({
        next: () => {
          this.router.navigate(["/orderList/" + this.id]);
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
