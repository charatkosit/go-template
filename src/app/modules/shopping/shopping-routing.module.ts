import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
import { ShopTableComponent } from './components/shop-table/shop-table.component';
;
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingPaymentComponent } from './components/shopping-payment/shopping-payment.component';

const shoppingRoutes: Routes = [
  {
    path: '', children: [
      { path: "shop", component: ShopComponent },
      { path: "shoplist", component: ShopTableComponent },
      { path: "shoppingcart", component: ShoppingCartComponent },
      { path: "payment", component: ShoppingPaymentComponent }
    ], canActivate: [UserGuard]
  }

];
@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
