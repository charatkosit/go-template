import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SAPGuard } from './guards/sap.guard';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './modules/auth/components/login/login.component';



const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },  //ไม่พิมพ์อะไรเลย ให้ไป login

  { path: "blank" ,    component: BlankComponent,       canActivate : [UserGuard]},
  { path: "content",   component: ContentComponent ,    canActivate : [UserGuard]},
  { path: "dashboard", component: DashboardComponent ,  canActivate : [UserGuard] },

  // { path: "shopping"  ,loadChildren: ()=>ShoppingModule,  canActivate : [UserGuard] },
  
  // { path: "delivery"  ,loadChildren: ()=>DeliveryModule,  canActivate : [UserGuard, SAPGuard]},
  // { path: "invoice"   ,loadChildren: ()=>InvoiceModule,   canActivate : [UserGuard, SAPGuard] },
  // { path: "cn"        ,loadChildren: ()=>CnModule,        canActivate : [UserGuard, SAPGuard] },
  // { path: "statement" ,loadChildren: ()=>StatementModule, canActivate : [UserGuard, SAPGuard] },

  

  //ดู route เพิ่มใน auth-routing-module
   //ดู route เพิ่มใน admin-routing-module


  { path: "**", redirectTo: "dashboard" }                    // พิมพ์ผิด หรือ พิมพ์มั่ว ให้ไป login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
