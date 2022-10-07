import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private rest: RestService) { }

  isError = false;

  ngOnInit() {
    if (this.rest.isLoggedIn() == true) {
      this.router.navigate(["/stock"])
    }
  }

  async onClickSubmit(values:string) {
    // // let result = await this.rest.login(values).toPromise();
    // let result =  await firstValueFrom(this.rest.login(values));
    // if (result.result == "ok") {
    //   localStorage.setItem(environment.loginResult, "ok")
    //   this.isError = false;
    //   this.router.navigate(["/stock"])
    // } else {
    //   this.isError = true
    // }

    localStorage.setItem(environment.loginResult, "ok")
    this.router.navigate(["/blank"])
  }


  onClickAdmin(){
    localStorage.setItem(environment.loginResult, "ok")
    //ไป กำหนดให้ this.rest.isSapUser()  เป็น true
  }

  onClickRegister() {
    this.router.navigate(["register"])
  }

}
