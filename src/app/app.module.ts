import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { NavigateComponentComponent } from './components/navigate-component/navigate-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter/dropdown-filter.component';
import { DropdownPageSizeComponent } from './components/dropdown-page-size/dropdown-page-size.component';
import { PaginationComponentComponent } from './components/pagination-component/pagination-component.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { MainComponentComponent } from './components/main-component/main-component.component';
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru'
import { AddItemComponent } from './components/add-item/add-item.component'
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

registerLocaleData(localeRU);

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderComponent,
    NavigateComponentComponent,
    DropdownFilterComponent,
    DropdownPageSizeComponent,
    PaginationComponentComponent,
    CompletedOrdersComponent,
    FooterComponent,
    LoginComponent,
    MainComponentComponent,
    AddItemComponent,
    ConfirmDeleteDialogComponent,
    EditItemComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgxNavbarModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://ordertracking.somee.com"],
        disallowedRoutes: []
      }
    }),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
