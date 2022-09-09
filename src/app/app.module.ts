import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


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
import '@angular/common/locales/global/ru';
import { AddItemComponent } from './components/add-item/add-item.component'


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
        allowedDomains: ["localhost:7195"],
        disallowedRoutes: []
      }
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
