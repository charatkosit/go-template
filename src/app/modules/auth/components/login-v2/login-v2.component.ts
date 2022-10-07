import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.css']
})
export class LoginV2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  onClickSubmit(){}

  onClickRegister() {
    this.router.navigate(["register"])
  }
}


