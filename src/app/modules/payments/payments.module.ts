import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentAddComponent } from './components/payment-add/payment-add.component';
import { PaymentEditComponent } from './components/payment-edit/payment-edit.component';


@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentAddComponent,
    PaymentEditComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ],
  exports: [
    PaymentListComponent,
    PaymentAddComponent,
    PaymentEditComponent
  ]
})
export class PaymentsModule { }
