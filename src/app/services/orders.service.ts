import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFilterModel } from '../models/IFilterModel';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  API_URL:string = 'https://localhost:44363/api/OrderTracking';

  constructor(private http: HttpClient) { }

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
    },
    {
      id: 2,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 3,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 4,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 5,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 6,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 7,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 8,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 9,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    },
    {
      id: 10,
      firstName:'aa',
      lastName: 'rnd1',
      visitDate: new Date,
      nameOrder: 'order1',
      descritpion: 'desc'
    }
  ];  

  // getOrders(): Observable<IOrder[]> {
  //   return of(this.orders);
  // }

  getOrders(filterModel: IFilterModel): Observable<IOrder[]> {
    console.log("wdwd");
    return this.http.post<IOrder[]>(this.API_URL + '/GetOrders', filterModel);
    //return of(this.orders);
  }

  getOrder(id: number): IOrder {
    let order: IOrder;
    order = this.orders.find(e => e.id == id)!;
    return order;
  }
}
