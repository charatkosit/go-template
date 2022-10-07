import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports: [
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent
  ]
})
export class OrdersModule { }
