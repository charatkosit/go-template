import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-template';
  mIsAuthen:boolean =false;
  constructor(public rest:RestService) {
    //ดึงสถาน การ Login ครั้งแรก = false
    this.rest.isLoggedIn();
  }
  
  ngOnInit(){
   
  }

}