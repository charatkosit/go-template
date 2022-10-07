import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAPGuard } from 'src/app/guards/sap.guard';
import { DeliveryAddComponent } from './components/delivery-add/delivery-add.component';
import { DeliveryEditComponent } from './components/delivery-edit/delivery-edit.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';


const deliveryRoutes: Routes = [
  {path: 'delivery', children:[
    {path: 'list' , component:DeliveryListComponent},
    {path: 'add'  , component:DeliveryAddComponent},
    {path: 'edit' , component:DeliveryEditComponent},
  ],canActivate:[SAPGuard]  }

];

@NgModule({
  imports: [RouterModule.forChild(deliveryRoutes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
