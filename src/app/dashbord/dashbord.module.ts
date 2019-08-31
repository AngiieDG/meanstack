import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { FormsModule } from '@angular/forms';
import { MaterialdesignModule } from '../materialdesign/materialdesign.module';
import { MypipePipe } from '../mypipe.pipe';



@NgModule({
  declarations: [DashbordComponent, MypipePipe],
  imports: [
    CommonModule,
    FormsModule,
    MaterialdesignModule,
    DashbordRoutingModule,
  ]
})
export class DashbordModule { }
