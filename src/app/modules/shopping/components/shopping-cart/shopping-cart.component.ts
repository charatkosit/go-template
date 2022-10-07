import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  total:number =0;
  cartList: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = "https://fakestoreapi.com/products?limit=5";
    this.http.get<Product[]>(url).subscribe(res => {
    
      this.cartList = res;
      this.total =this.cartList.reduce((accumulator,obj)=>{ return accumulator +obj.price},0)

    })
  }

}