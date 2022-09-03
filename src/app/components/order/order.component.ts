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
  order: IOrder;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private service: OrdersService) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.order = {
      id: 0,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    };
  }

  ngOnInit(): void {
    this.service.getOrder(this.id).subscribe(result => {
      this.order = result;
    }); 
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

}
