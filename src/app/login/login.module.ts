import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import {DashbordModule}  from '../dashbord/dashbord.module';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';



@NgModule({

  declarations: [LoginComponent, RestorePasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
  DashbordModule,
    FormsModule
  ]
})
export class LoginModule { }
