import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { last, Subscription } from 'rxjs';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  lastUpdate!: string

  constructor(private activateRoute: ActivatedRoute, private service: OrdersService, private router: Router, private matDialog:MatDialog) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.order = {
      orderid: -1,
      firstname:'',
      lastname: '',
      visitdate: new Date,
      ordername: '',
      description: '',
      updatedate: new Date
    };
    this.isLoading = true;
    this.hasError = false;
  }

  calculateLastUpdate() {
    let now: Date = new Date;
    let curDate = new Date(this.order.updatedate);
    let deltaTime = +now - +curDate;
    if (deltaTime > 86400000)
    {
      this.lastUpdate = 'Последнее обновление ' + Math.floor(deltaTime / 86400000) + ' дня назад';
      return;
    }
    if (deltaTime > 3600000)
    {
      this.lastUpdate = 'Последнее обновление ' + Math.floor(deltaTime / 3600000) + ' часа назад';
      return;
    }
    if (deltaTime > 60000)
    {
      this.lastUpdate = 'Последнее обновление ' + Math.floor(deltaTime / 60000) + ' минут назад';
      return;
    }
    if (deltaTime < 60000)
    {
      this.lastUpdate = 'Последнее обновление менее минуты назад';
      return;
    }
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
        this.calculateLastUpdate();
      }
      this.isLoading = false;
      
    }); 
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  openDialog() {
    this.matDialog.open(ConfirmDeleteDialogComponent, {
      width: "360px",
      height: "150px",
      data: this.order.orderid
    });
  }
}
