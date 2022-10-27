import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});  
  private hostUrl = environment.backendUrl;  //กำหนด url server api ไว้ที่ environment
  
  // private authenApiUrl = `${this.hostUrl}api/v2/authen`;
  // private stockApiUrl = `${this.hostUrl}api/v2/stock`;
  // private loginUrl = `${this.authenApiUrl}/login`;
  // private registerUrl = `${this.authenApiUrl}/register`; 

  constructor(private http:HttpClient) { }

  isLoggedIn(){
    let loginResult = localStorage.getItem(environment.loginResult);
    return (loginResult != null && loginResult == 'ok');
  }
 
  isSapUser(){
    return true;
  }

}
