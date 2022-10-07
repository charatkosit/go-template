import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAPGuard } from 'src/app/guards/sap.guard';
import { PaymentAddComponent } from './components/payment-add/payment-add.component';
import { PaymentEditComponent } from './components/payment-edit/payment-edit.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';

const paymentRoutes: Routes = [
  {path: 'payments' , children:[
    {path: 'list' ,component:PaymentListComponent},
    {path: 'add'  ,component:PaymentAddComponent},
    {path: 'edit' ,component:PaymentEditComponent}
  ],canActivate:[SAPGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(paymentRoutes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
