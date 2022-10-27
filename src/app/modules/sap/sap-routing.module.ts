import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { CnListComponent } from './cn/components/cn-list/cn-list.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { DeliveryListComponent } from './delivery/components/delivery-list/delivery-list.component';
import { InvoiceListComponent } from './invoice/components/invoice-list/invoice-list.component';
import { PaymentListComponent } from './payments/components/payment-list/payment-list.component';
import { StatementListComponent } from './statement/components/statement-list/statement-list.component';

const sapRoutes: Routes = [
  { path: "account/list", component: AccountListComponent },
  { path: "invoice/list", component: InvoiceListComponent},
  { path: "delivery/list", component: DeliveryListComponent},
  { path: "cn/list", component: CnListComponent},
  { path: "payment/list", component: PaymentListComponent},
  { path: "statement/list", component: StatementListComponent},
  { path: "dashboard/list", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(sapRoutes)],
  exports: [RouterModule]
})
export class SapRoutingModule { }
