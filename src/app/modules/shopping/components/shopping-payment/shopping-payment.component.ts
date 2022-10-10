import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-payment',
  templateUrl: './shopping-payment.component.html',
  styleUrls: ['./shopping-payment.component.css']
})
export class ShoppingPaymentComponent implements OnInit {

  showed:Boolean = false;
  enableEditInvoice:Boolean = false;
  enableEditAddress:Boolean = false;
  enableAddAddress:Boolean = false;

  DeliveryCompany:string = 'ไปรษณีย์ไทย แบบธรรมดา';
  constructor() { }

  ngOnInit(): void {
  }

  
  onAddAddress(){
    if(this.enableAddAddress == true) {
      this.enableAddAddress = false;
    } else {
      this.enableAddAddress = true;
    }
  }

  onEditAddress(){
    // toggle show
    if(this.enableEditAddress == true){
      this.enableEditAddress = false;
    }else{
      this.enableEditAddress = true;
    }
  }
  onEditInvoice(){
    // toggle show
    if(this.enableEditInvoice == true){
      this.enableEditInvoice = false;
    } else {
      this.enableEditInvoice = true;
    }
  }
  onSelectDelivery(){
    // toggle show
    if(this.showed == true){
      this.showed = false;
    } else{
      this.showed = true;
    }
   

  }
}
