import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import {DashbordModule}  from '../dashbord/dashbord.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({

  declarations: [LoginComponent, RestorePasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DashbordModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule, 
    FlexLayoutModule
  ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
