import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GoPart } from 'src/app/interfaces/goPart';
import { GoDatum } from 'src/app/interfaces/goDatum';
import { RestService } from 'src/app/services/rest.service';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { SumOrder } from 'src/app/interfaces/SumOrder';
import { MyPart, PartListA } from 'src/app/interfaces/myPart';
import { CartNewComponent } from 'src/app/components/header/cart-new/cart-new.component';
import { ApiPartlist, Partlist, TablePartlist } from 'src/app/interfaces/apiPartlist';


declare var $: any;




@Component({
    selector: 'app-shop-table-api',
    templateUrl: './shop-table-api.component.html',
    styleUrls: ['./shop-table-api.component.css']
})
export class ShopTableApiComponent implements OnInit {

    apiPartlist!: ApiPartlist;
    partlist: Partlist[] = [];
    tablePartlist: TablePartlist[] =[];

    brandForm = new FormControl();
    numberForm = new FormControl();
    itemnameForm = new FormControl();
    modelForm = new FormControl();
    totalFound: number = 0;

    keyword: string = '';
    keyword_1: string = '';
    var1: string = '';
    var2: string = '';
    var3: string = '';
    var4: string = '';
    page: number = 0;
    page_size: number = 0;
    no_start: number = 0
    no_end: number = 0
    result:TablePartlist[] = [] ;
    eth:any;
 
    mock_brand:any[] = [
        { brand:'', display:'ค้นหาทุกยี่ห้อ'},
        { brand:'ACD', display:'ACDelco'},
        { brand:'CHE', display:'Chevrolet'},
        { brand:'FOR', display:'Ford'},
        { brand:'HIN', display:'Hin'},
        { brand:'HON', display:'Honda'},
        { brand:'HYU', display:'Hyundai'},
        { brand:'ISU', display:'Isuzu'},
        { brand:'MAZ', display:'Mazda'},
        { brand:'MGP', display:'MGP'},
        { brand:'MIT', display:'Misubishi'},
        { brand:'NIS', display:'Nissan'},
        { brand:'NIU', display:'NIU'},
        { brand:'SUZ', display:'Suzuki'},
        { brand:'TOY', display:'Toyota'},
        { brand:'TRW', display:'TRW'},
];
    api_test: Partlist[] = [
        {
          id: 2,
          Brand: 'ACD',
          ItemCode: 'ACD-19100935',
          ItemCodeNew: 'ACD-19100935',
          ItemName: 'กรองเครื่อง COLORADO 2.5 / D-MAX / 4JA1 (ปี 2003-2004) (10)',
          Model: '',
          RetailPrice: 155,
        },
        {
          id: 3,
          Brand: 'ACD',
          ItemCode: 'ACD-19100936',
          ItemCodeNew: 'ACD-19281506',
          ItemName:
            'กรองเครื่อง Colorado 2.5 3.0/ D-Max Commonrail / 4JK  4JJ (ปี 2005-2011) (Premium) (10)',
          Model: '',
          RetailPrice: 159,
        },
        {
          id: 4,
          Brand: 'ACD',
          ItemCode: 'ACD-19100937',
          ItemCodeNew: 'ACD-19281507',
          ItemName: 'กรองอากาศ Colorado /D-Max TFR 4JH1 (ปี 2005) (Premium) (10)',
          Model: '',
          RetailPrice: 315,
        },
      ];

    constructor(private http: HttpClient, private rest: RestService, private share: ShareService) { }



    ngOnInit(): void {
        $(function () {
            $("#example1").DataTable({
 

                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "searching": false,
                "paging": true,
                "info":false,
                "ordering": false,

                
              // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#example1_wrapper .col-md:eq(0)');
  
          });
    }




    onSearchPartlist() {
        // รับค่าจาก template
        this.var1 = this.itemnameForm.value;
        this.var2 = this.numberForm.value;
        this.var3 = this.brandForm.value;
        this.var4 = this.modelForm.value;
        this.page = 1;
        this.page_size = 20;
        this.no_start = this.page * this.page_size - (this.page_size - 1)
        this.no_end = this.page * this.page_size
        // keyword = ItemName=&ItemCode=&Brand=&Model=

        //นำค่ามาต่อกัน แล้วเอาคำว่า null ออก
        this.keyword = `ItemName=${this.var1}&ItemCode=${this.var2}&Brand=${this.var3}&Model=${this.var4}&page=${this.page}&page_size=${this.page_size}`
        this.keyword = this.keyword.replace(/null/g, '');
        this.keyword_1 = this.keyword;
        //ยิง api get 
        this.rest.getPartlistByKeyword(this.keyword)
            .subscribe((res: ApiPartlist) => {
                this.apiPartlist = res;
                this.partlist = this.apiPartlist.data
                this.totalFound = this.apiPartlist.resultFound
                console.log(this.totalFound)
                console.log(this.partlist[0].ItemCode)
            })
            console.log(this.partlist)   


        return this.partlist;
    }



    onSelect(itemCode:string, itemName:string, retailPrice:number) {
        let cart: SumOrder = {ItemCode: '',ItemName:'' , RetailPrice:0 , qty: 0 , total: 0}
        let updateQty: number = 0;
        let updateTotal: number = 0;

        console.log(this.share.sumCart);
        console.log("Selected Product Id: ", itemCode); // You get the Id of the selected item here
        let qty: number = 1;

        // ตรวจดูก่อน ถ้า ItemCode ไม่เคยมีก่อนหน้า  qty=1
        const index = this.share.sumCart.findIndex((element) => element.ItemCode === itemCode);
        console.log(index)
        // return -1 ไม่มี  , return 2 หมายถึง index2

        if (index < 0) {
            // ถ้า return -1 แสดงว่าไม่มีค่า ซ้ำ   
            updateTotal = retailPrice
            cart = { ItemCode: itemCode , ItemName: itemName   , RetailPrice: retailPrice  ,qty: qty , total: updateTotal }
            this.share.sumCart.push(cart)
            this.share.count++
            this.share.grandTotal = this.share.grandTotal + updateTotal
        } else {
            // ถ้าพบ index ให้ เอาค่า ไปดึง qty มา บวก 1 แล้ว  update
            updateQty = this.share.sumCart[index].qty
            updateQty++
            updateTotal = this.share.sumCart[index].RetailPrice
            this.share.sumCart[index].qty = updateQty
            this.share.sumCart[index].total = updateTotal
            this.share.count++
            this.share.grandTotal = this.share.grandTotal + updateTotal
        }





        // ตรวจดู
        console.log(this.share.sumCart)
        this.onAlert();
    }

    onAlert() {
        $(function () {
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
