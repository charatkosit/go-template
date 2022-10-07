import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAPGuard } from 'src/app/guards/sap.guard';
import { InvoiceAddComponent } from './components/invoice-add/invoice-add.component';
import { InvoiceEditComponent } from './components/invoice-edit/invoice-edit.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';

const invoiceRoutes: Routes = [
  { path:'invoice', children:[
    { path: "list", component: InvoiceListComponent },
    { path: "add",  component: InvoiceAddComponent },
    { path: "edit", component: InvoiceEditComponent }
  ] ,canActivate:[SAPGuard]  }

];

@NgModule({
  imports: [RouterModule.forChild(invoiceRoutes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
