import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { ShopFrontComponent } from './components/shop-front/shop-front.component';
import { ShopTableApiComponent } from './components/shop-table-api/shop-table-api.component';
import { ShoppingCartV1Component } from './components/shopping-cart-v1/shopping-cart-v1.component';
import { ShopArmV1Component } from './components/shop-arm-v1/shop-arm-v1.component';



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
    ShopFrontComponent,
    ShopTableApiComponent,
    ShoppingCartV1Component,
    ShopArmV1Component,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingRoutingModule
  ],
  providers: [ShareService],
  exports: [
    ShopComponent,
    ShoppingCartComponent,
    ShoppingPaymentComponent,
    ShopTableComponent,
    ShopFrontComponent,
    ShopTableApiComponent,
    ShoppingCartV1Component,
    ShopArmV1Component,
    
  ]
})
export class ShoppingModule { }
