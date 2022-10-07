import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPaymentComponent } from './components/account-payment/account-payment.component';
import { AccountOrderComponent } from './components/account-order/account-order.component';


@NgModule({
  declarations: [
    AccountPaymentComponent,
    AccountOrderComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [
    AccountPaymentComponent,
    AccountOrderComponent
  ]
})
export class AccountModule { }
