import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const authRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "recover", component: LoginComponent },
  { path: "forgot", component: ForgotPasswordComponent },
  { path: "register", component: RegisterComponent},
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
