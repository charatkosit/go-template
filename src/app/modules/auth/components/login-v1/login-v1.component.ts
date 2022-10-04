import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-v1',
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login-v1.component.css']
})
export class LoginV1Component implements OnInit {

  constructor(private router: Router,  private rest: RestService) { }

  ngOnInit(): void {
    // console.log('isLoggedIn :'+this.rest.isLoggedIn())
    // if (this.rest.isLoggedIn() == true) {
    //   this.router.navigate(["/stock"])
    // }
  }

  onClickSubmit(){
    localStorage.setItem(environment.loginResult, "ok")
    this.router.navigate(["/dashboard"])
  }

}
