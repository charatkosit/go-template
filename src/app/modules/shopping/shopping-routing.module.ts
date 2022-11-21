import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
import { ShopFrontComponent } from './components/shop-front/shop-front.component';
import { ShopTableApiComponent } from './components/shop-table-api/shop-table-api.component';
import { ShopTableComponent } from './components/shop-table/shop-table.component';
;
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartV1Component } from './components/shopping-cart-v1/shopping-cart-v1.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingPaymentComponent } from './components/shopping-payment/shopping-payment.component';

const shoppingRoutes: Routes = [
  {
    path: '', children: [
      { path: "shop", component: ShopComponent },
      { path: "shopfront", component: ShopFrontComponent },
      { path: "shoplist", component: ShopTableApiComponent },
      { path: "shoppingcart", component: ShoppingCartV1Component },
      { path: "shoptableapi", component: ShopTableApiComponent },
      { path: "payment", component: ShoppingPaymentComponent }
    ], canActivate: [UserGuard]
  }

];
@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
