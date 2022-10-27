import { Component, OnInit } from '@angular/core';

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
  gfg:string = "";
  pay:string = "";

  DeliveryCompany:string = 'ไปรษณีย์ไทย แบบธรรมดา';
  constructor() { }

  ngOnInit(): void {
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
  onSelectDelivery(){
    // toggle show
    this.editDelivery = !this.editDelivery
  }
  onSelectPayment(){
    // toggle show
    this.paymentMethod = !this.paymentMethod;
  }

  setValue(value:string){
    this.gfg = value;
  }

  setPaymentMethod(value:string){
    this.pay = value;
  }
}
