import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CnRoutingModule } from './cn-routing.module';
import { CnListComponent } from './components/cn-list/cn-list.component';
import { CnAddComponent } from './components/cn-add/cn-add.component';
import { CnEditComponent } from './components/cn-edit/cn-edit.component';


@NgModule({
  declarations: [
    CnListComponent,
    CnAddComponent,
    CnEditComponent
  ],
  imports: [
    CommonModule,
    CnRoutingModule
  ],
  exports: [
    CnListComponent,
    CnAddComponent,
    CnEditComponent
  ]
})
export class CnModule { }
