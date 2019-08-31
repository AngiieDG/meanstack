import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {PruebaGuard} from './prueba.guard';



const routes: Routes = [{
  path:'',
  loadChildren:'./login/login.module#LoginModule'
},{
  path:'dashbord',
  loadChildren:'./dashbord/dashbord.module#DashbordModule',
  //Se importa en las rutas que desemos protejer 
    canActivate: [AuthGuard]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
