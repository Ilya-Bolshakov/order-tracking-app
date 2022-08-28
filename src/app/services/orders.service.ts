import { Injectable } from '@angular/core';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  orders: IOrder[] = [
    {
      id: 0,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 1,
      firstName:'bb',
      lastName: 'rnd2',
      visitDate: new Date(2022, 5, 1),
      nameOrder: 'order2',
      descritpion: 'desc'
    }
  ];

  getOrders(): IOrder[] {
    
    
    return this.orders;
  }

  getOrder(id: number): IOrder {
    let order: IOrder;
    order = this.orders.find(e => e.id == id)!;
    return order;
  }
}
