import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAPGuard } from 'src/app/guards/sap.guard';
import { CnAddComponent } from './components/cn-add/cn-add.component';
import { CnEditComponent } from './components/cn-edit/cn-edit.component';
import { CnListComponent } from './components/cn-list/cn-list.component';

const cnRoutes: Routes = [
  {path: 'cn' , children:[
    {path: 'list' ,component:CnListComponent},
    {path: 'add'  ,component:CnAddComponent},
    {path: 'edit' ,component:CnEditComponent}
  ],canActivate:[SAPGuard]  }

];

@NgModule({
  imports: [RouterModule.forChild(cnRoutes)],
  exports: [RouterModule]
})
export class CnRoutingModule { }
