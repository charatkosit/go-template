import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';
import { RestService } from 'src/app/services/rest.service';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  mycart:number[] =[];
  productList: Product[] = [];
  constructor(private http: HttpClient, private rest: RestService, private share:ShareService) { }

  ngOnInit(): void {

   this.http.get<Product[]>("https://fakestoreapi.com/products/category/women's clothing").subscribe(res => {
      return this.productList = res;
    })
  }


  onClickCategory(cate: string) {
    let url = "https://fakestoreapi.com/products/category/" + cate;
    this.http.get<Product[]>(url).subscribe(res => {
      console.log(url);
      return this.productList = res;
    })
  }


  onSelect(selectedItem: any) {
    console.log("Selected Product Id: ", selectedItem.id); // You get the Id of the selected item here
    this.mycart.push(selectedItem.id);
    console.log("Data in Cart:",this.mycart);
    this.share.count++ ;
    this.onAlert();
}


  onAlert() {
    $(function() {
      var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1600
      });
  
      
        Toast.fire({
          icon: 'success',
          title: 'เพิ่มสินค้า ลงในตระกร้า'
        });
     
  
    });
  }

}