import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const sapRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(sapRoutes)],
  exports: [RouterModule]
})
export class SapRoutingModule { }
