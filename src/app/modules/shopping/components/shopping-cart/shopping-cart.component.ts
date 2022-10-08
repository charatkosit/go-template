import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Cart } from '../../../../interfaces/cart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  total: number = 0;
  cartList: Product[] = [];
  cart: Cart[] = []   // ยิงแบบตัวเดียว กับยิงขอเป็นชุด datatype ไม่เหมือนกัน
  tcart: any
  arr: string[] = [];
  // myCart_dummy:number[] =[12,4,5,7,14];

  myCart_Product: number[] = [12, 4, 5, 7, 14];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("Hello")
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



}
