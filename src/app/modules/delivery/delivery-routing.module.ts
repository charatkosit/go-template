import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';

const deiveryRoutes: Routes = [
  {path: 'delivery' , component:DeliveryOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(deiveryRoutes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
