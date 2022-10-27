import { Injectable, TemplateRef } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  toasts: any[] = [];

  private headers = new HttpHeaders({'Content-Type': 'application/json'});  
  private hostUrl = environment.backendUrl;  //กำหนด url server api ไว้ที่ environment

  //https://fakestoreapi.com/products/category/women's clothing
  
  private authenApiUrl = `${this.hostUrl}api/v2/authen`;
  private stockApiUrl = `${this.hostUrl}api/v2/stock`;
  private loginUrl = `${this.authenApiUrl}/login`;
  private registerUrl = `${this.authenApiUrl}/register`; 

  private productUrl = `${this.hostUrl}/products/category`;  
 

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







}
