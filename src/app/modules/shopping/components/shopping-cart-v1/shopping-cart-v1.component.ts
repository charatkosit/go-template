import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-shopping-cart-v1',
  templateUrl: './shopping-cart-v1.component.html',
  styleUrls: ['./shopping-cart-v1.component.css']
})
export class ShoppingCartV1Component implements OnInit {
  total: number = 0;
  cartList: Product[] = [];
  cart: Cart[] = []   // ยิงแบบตัวเดียว กับยิงขอเป็นชุด datatype ไม่เหมือนกัน
  tcart: any
  arr: string[] = [];
  // myCart_dummy:number[] =[12,4,5,7,14];

  myCart_Product: number[] = [12, 4, 5, 7, 14];
  constructor(private http: HttpClient, public share: ShareService) { }

  ngOnInit() {
    console.log("Hello")
    this.share.count = this.myCart_Product.length;
    console.log("Qty in Cart:" + this.myCart_Product.length);

    this.myCart_Product.forEach(id => {
      let url = "https://fakestoreapi.com/products/" + id;
      console.log("url: " + url)

      this.http.get<Cart[]>(url).subscribe(res => {
        console.log(res);
        this.tcart = res;
        this.cart.push(this.tcart);
        this.total = this.cart.reduce((accumulator, obj) => {
          return accumulator + obj.price
        }, 0)
      });
      console.log(this.cart);

    })
  }

  // for test share data Qty in Cart  btw header cart and shopping shopping cart
  onClickQty() {
    // this.share.count = this.myCart_Product.length;
    this.share.count++;
    console.log("share count:" + this.share.count)
  }


  onEnableDelete() {


  }
}
