import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}  from './login.component';
import {RestorePasswordComponent}  from './restore-password/restore-password.component';
import {DashbordComponent}  from '../dashbord/dashbord.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
  path:'restore-password',
  component:RestorePasswordComponent
},

{
  path:'dashbord',
  component:DashbordComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
