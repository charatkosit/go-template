import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementRoutingModule } from './statement-routing.module';
import { StatementListComponent } from './components/statement-list/statement-list.component';
import { StatementAddComponent } from './components/statement-add/statement-add.component';
import { StatementEditComponent } from './components/statement-edit/statement-edit.component';
import { StatementCenterComponent } from './components/statement-center/statement-center.component';
import { StatementDetailComponent } from './components/statement-detail/statement-detail.component';


@NgModule({
  declarations: [
    StatementListComponent,
    StatementAddComponent,
    StatementEditComponent,
    StatementCenterComponent,
    StatementDetailComponent
  ],
  imports: [
    CommonModule,
    StatementRoutingModule
  ],
  exports: [
    StatementListComponent,
    StatementAddComponent,
    StatementEditComponent,
    StatementCenterComponent,
    StatementDetailComponent
  ]
})
export class StatementModule { }
