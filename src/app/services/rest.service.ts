import { Injectable, TemplateRef } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { MyPart } from '../interfaces/myPart';
import { Data_BillTo, Post_BillTo } from '../interfaces/post_BillTo';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  toasts: any[] = [];

  private headers = new HttpHeaders({'Content-Type': 'application/json'});  
  private hostUrl = environment.backendUrl;  //กำหนด url server api ไว้ที่ environment
  private sapUrl  = environment.sapUrl;
  private sapToken = environment.sapApiToken;


  //https://fakestoreapi.com/products/category/women's clothing
  
  private authenApiUrl = `${this.hostUrl}api/v2/authen`;
  private stockApiUrl = `${this.hostUrl}api/v2/stock`;
  private loginUrl = `${this.authenApiUrl}/login`;
  private registerUrl = `${this.authenApiUrl}/register`; 

  private productUrl = `${this.hostUrl}/products/category`;
  
  private  preurl = `${this.hostUrl}api/v1`;
 

  constructor(private router:Router, private http:HttpClient) { }

  isLoggedIn(){
    let loginResult = localStorage.getItem(environment.loginResult);
    return (loginResult != null && loginResult == 'ok');
  }
 
  isSapUser(){
    return true;
  }

  onClickSignOut(){
     localStorage.removeItem(environment.loginResult);
     this.router.navigate(["/login"])
  }


  getProducts(){
    return this.http.get<any[]>(this.productUrl, {headers: this.headers})
  }

login(usernamePassword:string){
  return this.http.post<any>(this.loginUrl, usernamePassword, {headers: this.headers})
}

register(usernamePassword:string){
  return this.http.post<any>(this.registerUrl, usernamePassword, {headers: this.headers})
}


getPartlistApiLocal(): any {
   return this.http.get<MyPart>(`${this.hostUrl}`);
}


getPartlistByKeyword(keyword:String) {
  // keyword = ItemName=&ItemCode=&Brand=&Model=
  console.log(keyword);
  
  const uri = `${this.preurl}/products/search?${keyword}`;
  console.log(uri);
  return this.http.get<any>(`${uri}`);    
}
  
getSapBillToByKeyword(post_BillTo :Post_BillTo){
   const uri =`${this.sapUrl}apigoplus/GetBillTo/`
   console.log(`uri:  ${uri}`);
   console.log(`post:  ${post_BillTo}`);

return this.http.post<any>('uri',post_BillTo)
   
}

 getSapShipToByKeyword(keyword:string){
  const uri =`${this.sapUrl}apigoplus/GetShipTo/`
  console.log(uri);
  console.log(this.sapToken);
  console.log(keyword);
 }

 getSapTransportToByKeyword(keyword:string){
  const uri =`${this.sapUrl}apigoplus/GetTransportTo/`
  console.log(uri);
  console.log(this.sapToken);
  console.log(keyword);
 }


}
