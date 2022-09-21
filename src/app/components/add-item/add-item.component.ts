import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IOrder } from 'src/app/models/IOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  order: IOrder;

  constructor(private orderService: OrdersService) {
    this.order = {
      id: -1,
      firstName:'',
      lastName: '',
      visitDate: new Date,
      nameOrder: '',
      description: '',
      updateDate: new Date
    };
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      //this.orderService.addOrder(this.order)
      console.log(form);
    }
  }

}
