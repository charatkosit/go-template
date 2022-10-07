import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SAPGuard } from 'src/app/guards/sap.guard';
import { StatementAddComponent } from './components/statement-add/statement-add.component';
import { StatementCenterComponent } from './components/statement-center/statement-center.component';
import { StatementDetailComponent } from './components/statement-detail/statement-detail.component';
import { StatementEditComponent } from './components/statement-edit/statement-edit.component';
import { StatementListComponent } from './components/statement-list/statement-list.component';

const statementRoutes: Routes = [
  
  {path: 'statement' ,children:[
    {path: 'list' ,     component:StatementListComponent},
    {path: 'detail' ,      component:StatementDetailComponent},
    {path: 'add' ,      component:StatementAddComponent},
    {path: 'edit' , component:StatementEditComponent},
    ] ,canActivate:[SAPGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(statementRoutes)],
  exports: [RouterModule]
})
export class StatementRoutingModule { }
