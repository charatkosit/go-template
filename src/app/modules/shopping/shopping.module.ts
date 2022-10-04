import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
 
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ],
  exports: [
    ShopComponent,
    CartComponent,
    PaymentComponent
  ]
})
export class ShoppingModule { }
