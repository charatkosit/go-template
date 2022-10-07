import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAPGuard } from 'src/app/guards/sap.guard';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const orderRoutes: Routes = [
  {path: 'orders' , children:[
    {path: 'list' ,component:OrderListComponent},
    {path: 'add'  ,component:OrderAddComponent},
    {path: 'edit' ,component:OrderEditComponent}
  ],canActivate:[SAPGuard]  }

];

@NgModule({
  imports: [RouterModule.forChild(orderRoutes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
