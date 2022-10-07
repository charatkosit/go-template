import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { DeliveryAddComponent } from './components/delivery-add/delivery-add.component';
import { DeliveryEditComponent } from './components/delivery-edit/delivery-edit.component';


@NgModule({
  declarations: [

    DeliveryListComponent,
    DeliveryAddComponent,
    DeliveryEditComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ],
  exports: [

    DeliveryListComponent,
    DeliveryAddComponent,
    DeliveryEditComponent
  ]
})
export class DeliveryModule { }
