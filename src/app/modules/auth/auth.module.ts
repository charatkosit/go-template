import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile/profile-edit.component';
import { LoginV1Component } from './components/login-v1/login-v1.component';
import { RegisterV1Component } from './components/register-v1/register-v1.component';
import { ForgotPasswordV1Component } from './components/forgot-password-v1/forgot-password-v1.component';
import { RecoverPasswordV1Component } from './components/recover-password-v1/recover-password-v1.component';
import { LoginV2Component } from './components/login-v2/login-v2.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    ProfileComponent,
    ProfileEditComponent,
    LoginV1Component,
    RegisterV1Component,
    ForgotPasswordV1Component,
    RecoverPasswordV1Component,
    LoginV2Component,
   

  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    ProfileComponent,
    ProfileEditComponent,
    LoginV1Component,
    RegisterV1Component,
    ForgotPasswordV1Component,
    RecoverPasswordV1Component,
    LoginV2Component,
    
  ]
})
export class AuthModule { }
