import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SapRoutingModule } from './sap-routing.module';
import { DeliveryListComponent } from './delivery/components/delivery-list/delivery-list.component';
import { DeliveryAddComponent } from './delivery/components/delivery-add/delivery-add.component';
import { DeliveryEditComponent } from './delivery/components/delivery-edit/delivery-edit.component';
import { InvoiceListComponent } from './invoice/components/invoice-list/invoice-list.component';
import { InvoiceAddComponent } from './invoice/components/invoice-add/invoice-add.component';
import { InvoiceEditComponent } from './invoice/components/invoice-edit/invoice-edit.component';
import { CnListComponent } from './cn/components/cn-list/cn-list.component';
import { CnAddComponent } from './cn/components/cn-add/cn-add.component';
import { CnEditComponent } from './cn/components/cn-edit/cn-edit.component';
import { StatementListComponent } from './statement/components/statement-list/statement-list.component';
import { StatementAddComponent } from './statement/components/statement-add/statement-add.component';
import { StatementEditComponent } from './statement/components/statement-edit/statement-edit.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountAddComponent } from './account/components/account-add/account-add.component';
import { AccountEditComponent } from './account/components/account-edit/account-edit.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';
import { OrderAddComponent } from './orders/components/order-add/order-add.component';
import { OrderEditComponent } from './orders/components/order-edit/order-edit.component';
import { PaymentListComponent } from './payments/components/payment-list/payment-list.component';
import { PaymentAddComponent } from './payments/components/payment-add/payment-add.component';
import { PaymentEditComponent } from './payments/components/payment-edit/payment-edit.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DeliveryListComponent,
    DeliveryAddComponent,
    DeliveryEditComponent,
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceEditComponent,
    CnListComponent,
    CnAddComponent,
    CnEditComponent,
    StatementListComponent,
    StatementAddComponent,
    StatementEditComponent,
    AccountListComponent,
    AccountAddComponent,
    AccountEditComponent,
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent,
    PaymentListComponent,
    PaymentAddComponent,
    PaymentEditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SapRoutingModule
  ],
  exports: [
    DeliveryListComponent,
    DeliveryAddComponent,
    DeliveryEditComponent,
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceEditComponent,
    CnListComponent,
    CnAddComponent,
    CnEditComponent,
    StatementListComponent,
    StatementAddComponent,
    StatementEditComponent,
    AccountListComponent,
    AccountAddComponent,
    AccountEditComponent,
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent,
    PaymentListComponent,
    PaymentAddComponent,
    PaymentEditComponent,
    DashboardComponent
  ]
})
export class SapModule { }
