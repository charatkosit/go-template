import { Component, OnInit } from '@angular/core';
import { Data_BillTo, Post_BillTo } from 'src/app/interfaces/post_BillTo';
import { RestService } from 'src/app/services/rest.service';
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
  gfg:string = "";
  pay:string = "";

  DeliveryCompany:string = 'ไปรษณีย์ไทย แบบธรรมดา';
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.onGetBillTo();
    this.onGetShipTo();
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




  async onGetBillTo(keyword:string = '10019590100' ){

    let customer_code =  keyword; //'10019590100';
    const token = environment.sapApiToken;
 
 const data: Data_BillTo = { customer_code: customer_code };
 console.log(data);
 
 const post_BillTo: Post_BillTo = {
   token: token,
   data: data,
 };
 

 console.log(`sapUrl: ${token}`);
 console.log(`customer_cod: ${customer_code}`);

     await this.rest.getSapBillToByKeyword(post_BillTo)
  }




  onGetShipTo(){
    this.rest.getSapShipToByKeyword('test ship')
  }
}
