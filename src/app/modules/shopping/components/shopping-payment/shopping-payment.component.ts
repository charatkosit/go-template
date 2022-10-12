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
    // toggle show
    this.enableAddAddress = !this.enableAddAddress
  }

  onEditAddress(){
    // toggle show
    this.enableEditAddress =!this.enableEditAddress

  }
  onEditInvoice(){
    // toggle show
    this.enableEditInvoice = !this.enableEditInvoice

  }
  onSelectDelivery(){
    // toggle show
    this.showed = !this.showed
  }
}
