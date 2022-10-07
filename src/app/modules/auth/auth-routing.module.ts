import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordV1Component } from './components/forgot-password-v1/forgot-password-v1.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginV1Component } from './components/login-v1/login-v1.component';
import { LoginV2Component } from './components/login-v2/login-v2.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecoverPasswordV1Component } from './components/recover-password-v1/recover-password-v1.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterV1Component } from './components/register-v1/register-v1.component';
import { RegisterComponent } from './components/register/register.component';

const authRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "forgot", component: ForgotPasswordComponent },
  { path: "recover", component: RecoverPasswordComponent },
  { path: "profile", component: ProfileComponent}, 
  
  { path: "loginv1", component: LoginV1Component },
  { path: "registerv1", component: RegisterV1Component},
  { path: "forgotv1", component: ForgotPasswordV1Component },
  { path: "recoverv1", component: RecoverPasswordV1Component},

  { path: "loginv2", component: LoginV2Component },
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
