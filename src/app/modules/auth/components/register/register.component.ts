import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Location } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private location: Location,
    private rest: RestService) { }

  isError = false;

  ngOnInit() {
  }

  async onClickSubmit(values:string) {
    // let result = await this.rest.register(values).toPromise();
    let result =  await firstValueFrom(this.rest.login(values));
    if (result.result == "ok") {
      this.isError = false
      this.location.back()
    } else {
      this.isError = true
    }
  }

  onClickCancel() {
    this.location.back();
  }
}
