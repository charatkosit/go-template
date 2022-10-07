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

  constructor(private router:Router, public rest:RestService) { }

  ngOnInit(): void {
  }

 
  onClickSignOut(){
    localStorage.removeItem(environment.loginResult)
    this.router.navigate(["/login"])
  }
}
