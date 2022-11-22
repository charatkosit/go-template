import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   project:string ='';
   backUrl:string = '';
   release:string = '';
  constructor(private router:Router, public rest:RestService) { }

  ngOnInit(): void {
     this.project = environment.project;
     this.backUrl = environment.backendUrl;
     this.release = environment.release;
  }

 
  onClickSignOut(){
    localStorage.removeItem(environment.loginResult)
    this.router.navigate(["/login"])
  }
}
