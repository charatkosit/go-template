import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBillTo, BillTo } from 'src/app/interfaces/BillTo';
import { Cart } from 'src/app/interfaces/cart';
import { MyPart, PartListA } from 'src/app/interfaces/myPart';
import { Product } from 'src/app/interfaces/product';
import { SumOrder } from 'src/app/interfaces/SumOrder';
import { RestService } from 'src/app/services/rest.service';
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
  showPOList: any[] = []
  partlista: PartListA[] = [];
  myData!: MyPart;
  myCart: SumOrder[] = [];
  grandTotal: number = 0;
  includeVat = 0; // แสดงราคา ก่อน vat
  vat: number = 0; // สินค้า Vat รวม
  today!: any;
  isSelect: boolean = false;
  isSelectListAll: boolean = false;
  arraySelect: string[] = [];

  mockApiBill: ApiBillTo = {
    "errorCode": "0",
    "resultFound": "2",
    "data": [
      {
        "BillToName": "บจก.โล้วเฮงหมงอะไหล่ยนต์",
        "BillToCode": "10019590100-001",
        "BillToAddress": "49/3 ถนนแสงชูโตใหม่ ตำบลท่าเรืออำเภอท่ามะกา จังหวัดกาญจนบุรี 71130",
        "BillToTaxID": "0715556001816",
        "BillToBranch": "00000"
      },
      {
        "BillToName": "บจก.โล้วเฮงหมงอะไหล่ยนต์",
        "BillToCode": "20019590100-001",
        "BillToAddress": "49/3 ถนนแสงชูโตใหม่ ตำบลท่าเรืออำเภอท่ามะกา จังหวัดกาญจนบุรี 71130",
        "BillToTaxID": "0715556001816",
        "BillToBranch": "00000"
      }
    ]
  }

  apiBillTo: BillTo[] = []
  billToName: string = ''
  billToAddress: string = ''
  billToTax: string = ''




  constructor(private http: HttpClient, private rest: RestService, public share: ShareService, private router: Router) { }

  ngOnInit() {
    console.log("Hello shopping cart")




    this.myCart = this.share.sumCart;
    this.grandTotal = this.share.grandTotal
    this.includeVat = this.grandTotal / 1.07
    this.vat = this.grandTotal - this.includeVat
    this.today = new Date();
    console.log(`today is: ${this.today}`)
    console.log(this.myCart)
    // this.rest.getPartlistByOne(temp[0].ItemCode)
    //   .subscribe(res => {
    //     this.myData = res
    //     this.partlista = this.myData.data
    //     console.log(this.partlista[0])
    //   })
    // console.log(`showPOList: ${this.partlista[0]}`)

    // api to get billTo
    this.apiBillTo = this.mockApiBill.data
    this.billToTax = this.apiBillTo[0].BillToTaxID
    this.billToName = this.apiBillTo[0].BillToName
    this.billToAddress = this.apiBillTo[0].BillToAddress

    console.log(this.billToName)
  }

  gotoPayment() {
    this.router.navigate(['/payment'])
  }

  onGetBillTo() {
    this.apiBillTo = this.mockApiBill.data
    this.billToTax = this.apiBillTo[0].BillToTaxID
    this.billToName = this.apiBillTo[0].BillToName
    this.billToAddress = this.apiBillTo[0].BillToAddress
    return
  }

  // for test share data Qty in Cart  btw header cart and shopping shopping cart
  onClickQty() {
    // this.share.count = this.myCart_Product.length;
    this.share.count++;
    console.log("share count:" + this.share.count)
  }


  onSelectListAll(event) {
    this.isSelectListAll = !this.isSelectListAll;
    console.log(`event:  ${event.checked}`)
    if (event.checked) {
      // เอารายชื่อทุกตัว มา ใส่ใน list
      // ส่งคำสั่งไป  check list ทุกตัว
    } else {
      this.arraySelect = [];
      // ส่งคำสั่งไป  unchecked list ทุกตัว
    }

    // update การแสดงปุ่ม
    if (this.arraySelect.length == 0) {
      this.isSelect = false
    } else {
      this.isSelect = true
    }


  }
  onSelectList(ItemCode: string) {


    this.arraySelect.push(ItemCode)
    console.log(this.arraySelect)

    if (this.arraySelect.length == 0) {
      this.isSelect = false
    } else {
      this.isSelect = true
    }

  }


  checkAllCheckBox(ev: any) {
    if (ev.target.checked) {
      this.myCart.forEach(x => {
        x.checked = ev.target.checked;
        // console.log(x.ItemCode)
        this.arraySelect.push(x.ItemCode)
        this.isSelect = true;
      })
    } else {
       //clear arraySelect if unCheck
       this.myCart.forEach(x => {
        x.checked = ev.target.checked;
      })
       this.arraySelect = [];
       this.isSelect = false;

    }

    console.log(`arraySelect:  ${this.arraySelect}`)

  }

  isAllCheckBoxChecked() {
    return this.myCart.every(p => p.checked);
  }


  isCheckBoxChecked(itemCode:string){
    console.log(`itemCode:  ${itemCode}`)


  }

  onEnableDelete() {


  }
}
