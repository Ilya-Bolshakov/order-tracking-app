import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

const routes: Routes = [
  {path: 'orderList/:id', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'orderList', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'completedOrders', component: CompletedOrdersComponent, canActivate: [AuthGuard] },
  {path: 'addItem', component: AddItemComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'editItem/:id', component:EditItemComponent },
  {path: '', component: MainComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
