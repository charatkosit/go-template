import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GoDatum } from 'src/app/interfaces/goDatum';
import { GoPart } from 'src/app/interfaces/goPart';
import { RestService } from 'src/app/services/rest.service';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-shop-arm-v1',
  templateUrl: './shop-arm-v1.component.html',
  styleUrls: ['./shop-arm-v1.component.css']
})

export class ShopArmV1Component implements OnInit {

 
    goPart: GoPart[] = [];
    goDatum: GoDatum[] = [];
    partList: GoDatum[] = [];
    mycart:string[] =[];
    p:number = 1;
    itemsPerPage:number = 9;
    totalProduct:any;
  
    txt = `{
      "errorCode": "0",
      "resultFound": "50",
      "data": [
          {
              "id": 1,
              "Brand": "ACD2",
              "ItemCode": "ACD-19261992",
              "ItemCodeNew": "ACD-19261992",
              "ItemName": "น้ำยาหล่อเย็น 1 ลิตร (ชนิดผสมน้ำ) (12)",
              "Model": "-",
              "RetailPrice": 259
          },
    
    
          {
              "id": 1518,
              "Brand": "HON",
              "ItemCode": "HON-90682SB0003",
              "ItemCodeNew": "HON-90682SB0003",
              "ItemName": "กิ๊บยางรองสกรู 5 มม",
              "Model": "CV9295",
              "RetailPrice": 19
          },
          {
              "id": 1519,
              "Brand": "HON",
              "ItemCode": "HON-90853SLE003",
              "ItemCodeNew": "HON-90853SLE003",
              "ItemName": "รีเวท ฝากันน้ำมัน",
              "Model": "HONDA",
              "RetailPrice": 37
          },
          {
              "id": 1520,
              "Brand": "HON",
              "ItemCode": "HON-91121RPC003",
              "ItemCodeNew": "HON-91121RPC003",
              "ItemName": "ลูกปืน",
              "Model": "-",
              "RetailPrice": 964
          },
          {
              "id": 1521,
              "Brand": "HON",
              "ItemCode": "HON-91203PFB013",
              "ItemCodeNew": "HON-91203PFB013",
              "ItemName": "ซีลเพลาราวลิ้น 27X43X9",
              "Model": "CR9601",
              "RetailPrice": 142
          },
          {
              "id": 1522,
              "Brand": "HON",
              "ItemCode": "HON-91207RE5003",
              "ItemCodeNew": "HON-91207RE5003",
              "ItemName": "ซีลหน้าเกียร์ 52X76X8",
              "Model": "BRIO11",
              "RetailPrice": 169
          },
          {
              "id": 1523,
              "Brand": "HON",
              "ItemCode": "HON-91214PWA003",
              "ItemCodeNew": "HON-91214PWAY01",
              "ItemName": "ซีลข้อเหวี่ยงหลัง 80X98X10",
              "Model": "CT0307",
              "RetailPrice": 345
          },
          {
              "id": 1524,
              "Brand": "HON",
              "ItemCode": "HON-91301RNAA01",
              "ItemCodeNew": "HON-91301RNAA01",
              "ItemName": "โอริง",
              "Model": "JAZZ14-15",
              "RetailPrice": 10
          },
  
          {
              "id": 1549,
              "Brand": "HYU",
              "ItemCode": "HYU-373004A320",
              "ItemCodeNew": "HYU-373004A320",
              "ItemName": "ไดชาร์ท",
              "Model": "H-1 12",
              "RetailPrice": 13190
          },
          {
              "id": 1550,
              "Brand": "HYU",
              "ItemCode": "HYU-529604HT00",
              "ItemCodeNew": "HYU-529604HT00",
              "ItemName": "ฝาปิดดุมล้อ",
              "Model": "H-1 2008-2",
              "RetailPrice": 145
          },
          {
              "id": 1551,
              "Brand": "HYU",
              "ItemCode": "HYU-545004H005",
              "ItemCodeNew": "HYU-545004H005",
              "ItemName": "ปีกนกล่างด้านหน้า L",
              "Model": "H-1 16",
              "RetailPrice": 7025
          },
          {
              "id": 1552,
              "Brand": "HYU",
              "ItemCode": "HYU-548402T000",
              "ItemCodeNew": "HYU-548402T000",
              "ItemName": "ลูกหมากเหล็กกันโคลงขวา",
              "Model": "SONATA 11",
              "RetailPrice": 1405
          },
          {
              "id": 1553,
              "Brand": "HYU",
              "ItemCode": "HYU-568204H000",
              "ItemCodeNew": "HYU-568204H000",
              "ItemName": "ลูกหมากแรคพวงมาลัย L",
              "Model": "H-1 08",
              "RetailPrice": 1335
          },
          
   
   
          {
              "id": 4167,
              "Brand": "TOY",
              "ItemCode": "TOY-843070K020",
              "ItemCodeNew": "TOY-843070K020",
              "ItemName": "สวิทเสื้อคอพวงมาลัย มีSENSOR 89245-0K010",
              "Model": "KUN51-61 KUN26",
              "RetailPrice": 7750
          },
   
      ]
  }`;
  
  
  
    constructor(private http: HttpClient, private rest: RestService, private share:ShareService) { }
  
    ngOnInit(): void {
  
      const obj = JSON.parse(this.txt);
      console.log(obj);
      this.partList = obj.data;
      console.log(this.partList);
  
  
  
  
      $(function () {
        $("#example1").DataTable({
          "responsive": true, "lengthChange": false, "autoWidth": false,
          // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        }).buttons().container().appendTo('#example1_wrapper .col-md:eq(0)');
        $('#example2').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
          "responsive": false,
        });
      });
    }
  
  
    onSelect(selectedItem: any) {
      console.log("Selected Product Id: ", selectedItem); // ส่ง  BarcodeNew มา
      this.mycart.push(selectedItem);
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
  
  searchBrand: string = '';
  
  onSearchBrandEntered (searchValue : string){
      this.searchBrand = searchValue;
  }
  
  
  


}
