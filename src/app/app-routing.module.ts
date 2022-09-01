import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path: 'orderList/:id', component: OrderComponent},
  {path: 'orderList', component: OrderListComponent},
  {path: 'completedOrders', component: CompletedOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
