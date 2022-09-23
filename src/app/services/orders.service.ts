import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IFilterModel } from '../models/IFilterModel';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  API_URL:string = 'https://localhost:7195/api/OrderTracking';

  constructor(private http: HttpClient) { }

  // getOrders(): Observable<IOrder[]> {
  //   return of(this.orders);
  // }

  private handleError (operation = 'operation') {
    return (error: any): Observable<string> => {
   
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(error.message);
    };
  }

  getOrders(filterModel: IFilterModel): Observable<any> {
    return this.http.post<IOrder[]>(this.API_URL + '/GetOrders', filterModel).pipe(
      catchError(this.handleError('getOrder')));
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<IOrder>(this.API_URL + '/GetOrder/' + id).pipe(
  catchError(this.handleError('getOrder')));
  };

  addOrder(order: IOrder) : Observable<any> {
    return this.http.post(this.API_URL + '/AddOrder', order);
  }

  editOrder(order: IOrder) : Observable<any> {
    return this.http.put(this.API_URL + '/EditOrder', order);
  }

  deleteOrder(id: number) : Observable<any> {
    return this.http.delete(this.API_URL + '/DeleteOrder/', {
      params: new HttpParams().set('id', id)
    });
  }
}
