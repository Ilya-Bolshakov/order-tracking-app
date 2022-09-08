import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  id!: number;
  order: IOrder;
  private subscription: Subscription;
  isLoading: boolean;
  hasError: boolean;
  errorMessage!: string;

  constructor(private activateRoute: ActivatedRoute, private service: OrdersService, private router: Router) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.order = {
      id: -1,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      description: 'desc'
    };
    this.isLoading = true;
    this.hasError = false;
  }

  ngOnInit(): void {
    this.service.getOrder(this.id).subscribe(result => {
      this.order = result;
      if (typeof(result) === "string")
      {
        this.hasError = true;
        this.errorMessage = result;
      }
      else {
        this.order = result;
      }
      this.isLoading = false;
    }); 
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }
}
