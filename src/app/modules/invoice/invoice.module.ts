import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceAddComponent } from './components/invoice-add/invoice-add.component';
import { InvoiceEditComponent } from './components/invoice-edit/invoice-edit.component';


@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceEditComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ],
  exports: [
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceEditComponent
  ]
})
export class InvoiceModule { }
