import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavigateComponentComponent } from './components/navigate-component/navigate-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter/dropdown-filter.component';
import { DropdownPageSizeComponent } from './components/dropdown-page-size/dropdown-page-size.component';
import { PaginationComponentComponent } from './components/pagination-component/pagination-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderComponent,
    MainMenuComponent,
    NavigateComponentComponent,
    DropdownFilterComponent,
    DropdownPageSizeComponent,
    PaginationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
