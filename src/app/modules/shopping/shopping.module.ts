import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingPaymentComponent } from './components/shopping-payment/shopping-payment.component';
import { SearchShopComponent } from './components/shop/components/search-shop/search-shop.component';
import { ProductsShopComponent } from './components/shop/components/products-shop/products-shop.component';
import { CarouselShopComponent } from './components/shop/components/carousel-shop/carousel-shop.component';
import { PaginationShopComponent } from './components/shop/components/pagination-shop/pagination-shop.component';
import { ShareService } from 'src/app/services/share.service';
import { ShopTableComponent } from './components/shop-table/shop-table.component';



@NgModule({
  declarations: [
    ShopComponent,


    ShoppingCartComponent,
    ShoppingPaymentComponent,
    SearchShopComponent,
    ProductsShopComponent,
    CarouselShopComponent,
    PaginationShopComponent,
    ShopTableComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ],
  providers: [ShareService],
  exports: [
    ShopComponent,
    ShoppingCartComponent,
    ShoppingPaymentComponent,
    ShopTableComponent,
    
  ]
})
export class ShoppingModule { }
