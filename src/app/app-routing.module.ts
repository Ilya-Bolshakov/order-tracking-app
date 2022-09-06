import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'orderList/:id', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'orderList', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'completedOrders', component: CompletedOrdersComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
