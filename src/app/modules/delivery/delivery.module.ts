import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';


@NgModule({
  declarations: [
    DeliveryOrderComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ],
  exports: [
    DeliveryOrderComponent
  ]
})
export class DeliveryModule { }
