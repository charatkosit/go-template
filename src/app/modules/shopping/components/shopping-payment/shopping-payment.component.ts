import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiBillTo, BillTo } from 'src/app/interfaces/BillTo';
import { Data_BillTo, Post_BillTo } from 'src/app/interfaces/post_BillTo';
import { ApiShipTo, ShipTo } from 'src/app/interfaces/ShipTo';
import { SumOrder } from 'src/app/interfaces/SumOrder';
import { ApiTransport, Transport } from 'src/app/interfaces/Transport';
import { RestService } from 'src/app/services/rest.service';
import { ShareService } from 'src/app/services/share.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shopping-payment',
  templateUrl: './shopping-payment.component.html',
  styleUrls: ['./shopping-payment.component.css']
})
export class ShoppingPaymentComponent implements OnInit {

  
 

  editDelivery:Boolean = false;
  editInvoice:Boolean = false;
  editAddress:Boolean = false;
  addAddress:Boolean = false;
  paymentMethod:Boolean = false;
  formEditInvoice:boolean=false;
  selectShipTo:boolean = false;
  selectTransport:boolean =false;
  gfg:string = "";
  pay:string = "";
  temp:SumOrder[] = [];
  grandTotal:number = 0;
  includeVat:number = 0;
  vat:number = 0;
  radio0ShipToName:string = '';
  radio1ShipToName:string = '';
  today:any ;

  mockApiShipTo:ApiShipTo = {
    "errorCode": "0",
    "resultFound": "1",
    "data": [
        {
            "ShipToName": "โล้วเฮงหมงอะไหล่ยนต์",
            "ShipToCode": "10019590100-002",
            "ShipToAddress": "49/3 ถนนแสงชูโตใหม่ ตำบลท่าเรืออำเภอท่ามะกา จังหวัดกาญจนบุรี 71130",
            "ShipToTaxID": "0715556001816",
            "ShipToBranch": "00000"
        },
        {
          "ShipToName": "โล้วเฮงหมงอะไหล่ยนต์2",
          "ShipToCode": "10019590100-002-2",
          "ShipToAddress": "49/3-2 ถนนแสงชูโตใหม่ ตำบลท่าเรืออำเภอท่ามะกา จังหวัดกาญจนบุรี 71130",
          "ShipToTaxID": "0715556001816",
          "ShipToBranch": "00002"
      }
    ]
}

apiShipTo:ShipTo[]=[]
shipToName:string=''
shipToAddress:string=''
shipToListCount:number = 0

mockApiBill:ApiBillTo =   {  "errorCode": "0",
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

apiBillTo:BillTo[] = []
billToName:string =''
billToAddress:string=''
billToTax:string=''
showAddress!: string[];

mockupApiTransport:ApiTransport = {
  "errorCode": "0",
  "resultFound": "2",
  "data": [
      {
          "TransportCode": "197",
          "TransportName": "ขนส่ง BT Logistic",
          "CutOffTime": "เปิดบิลก่อน 15.00 น. จัดส่งช่วงเย็นในวันเดียวกัน | หลัง 15.00 น. จัดส่งภายในวันถัดไป (N+1)"
      },
      {
          "TransportCode": "202",
          "TransportName": "ขนส่ง PM / PL",
          "CutOffTime": "เปิดบิลก่อน 12.00 น. จัดส่งช่วงเย็นในวันเดียวกัน | หลัง 12.00 น. จัดส่งภายในวันถัดไป (N+1)"
      }
  ]
}


apiTransport:Transport[] = []
transportCode = ''
transportName = ''
cutoffTime = ''


  DeliveryCompany:string = 'ไปรษณีย์ไทย แบบธรรมดา';
  constructor(private rest:RestService, public share: ShareService) { }

  ngOnInit(): void {
    this.today = new Date();
    console.log(`today is: ${this.today}`)
    this.onGetBillTo();
    this.onGetShipTo();
    this.onGetTransport();
    this.temp = this.share.sumCart
    this.grandTotal = this.share.grandTotal
    this.includeVat = this.grandTotal / 1.07
    this.vat = this.grandTotal - this.includeVat
  }

  
  onAddAddress(){
    // toggle show
    this.addAddress = !this.addAddress
  }

  onEditAddress(){
    // toggle show
    this.editAddress =!this.editAddress
  }
  onEditInvoice(){
    // toggle show
    this.editInvoice = !this.editInvoice

  }
  
  showFormEditInvoice(){
    // toggle show
    this.formEditInvoice = !this.formEditInvoice

  }
  onSelectShipTo(){
    // toggle show
    this.selectShipTo = !this.selectShipTo

  }
  onSelectTransport(){
    this.selectTransport = !this.selectTransport
  }
  onSelectPayment(){
    // toggle show
    this.paymentMethod = !this.paymentMethod;
  }

  setShipTo(index:number){
   this.shipToListCount   = Number(this.mockApiShipTo.resultFound)
   this.shipToName = this.apiShipTo[index].ShipToName
   this.shipToAddress = this.apiShipTo[index].ShipToAddress
  

  }


  setTransport(index:number){
    this.transportCode = this.apiTransport[index].TransportCode
    this.transportName = this.apiTransport[index].TransportName
    this.cutoffTime = this.apiTransport[index].CutOffTime
  
  }

  setPaymentMethod(value:string){
    this.pay = value;
  }




  onGetBillTo(){
    this.apiBillTo = this.mockApiBill.data
    this.billToTax = this.apiBillTo[0].BillToTaxID
    this.billToName = this.apiBillTo[0].BillToName
    this.billToAddress = this.apiBillTo[0].BillToAddress
    this.showAddress =   this.billToAddress.split(' ')
    return
  }




  onGetShipTo(){
    // this.rest.getSapShipToByKeyword('test ship')
    this.apiShipTo = this.mockApiShipTo.data
    console.log(this.apiShipTo)
    this.shipToName = this.apiShipTo[0].ShipToName
    this.shipToAddress = this.apiShipTo[0].ShipToAddress


    this.radio0ShipToName =this.apiShipTo[0].ShipToName
    this.radio1ShipToName =this.apiShipTo[1].ShipToName
    return
  }


  onGetTransport(){
    this.apiTransport = this.mockupApiTransport.data
    this.transportCode = this.apiTransport[0].TransportCode
    this.transportName = this.apiTransport[0].TransportName
    this.cutoffTime = this.apiTransport[0].CutOffTime
    return
  }

}