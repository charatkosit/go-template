import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ShopComponent } from './components/shop/shop.component';

const shoppingRoutes: Routes = [
  { path: "shop", component: ShopComponent },
  { path: "shoppingcart", component: CartComponent },  
  { path: "payment", component: PaymentComponent },


]
@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
