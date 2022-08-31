import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  id!: number;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private service: OrdersService) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  order!: IOrder;

  ngOnInit(): void {
    this.order = this.service.getOrder(this.id); 
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

}
