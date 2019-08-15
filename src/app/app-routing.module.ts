import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'',
  loadChildren:'./login/login.module#LoginModule'
},{
  path:'dashbord',
  loadChildren:'./dashbord/dashbord.module#DashbordModule'
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
