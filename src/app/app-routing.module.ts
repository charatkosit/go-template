import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { CartComponent } from './modules/shopping/components/cart/cart.component';
import { PaymentComponent } from './modules/shopping/components/payment/payment.component';
import { ShopComponent } from './modules/shopping/components/shop/shop.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },  //ไม่พิมพ์อะไรเลย ให้ไป login
  { path: "blank" , component: BlankComponent},
  { path: "content", component: ContentComponent },
  { path: "dashboard", component: DashboardComponent },
  //ดู route เพิ่มใน auth-routing-module
   //ดู route เพิ่มใน admin-routing-module
  //ดู route เพิ่มใน  shopping-routing-module

  { path: "**", redirectTo: "login" }                    // พิมพ์ผิด หรือ พิมพ์มั่ว ให้ไป login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
