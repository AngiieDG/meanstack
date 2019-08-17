import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
