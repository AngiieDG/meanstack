import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(
    public longinService: LoginService
  ) { }

  ngOnInit() {
  }

doLogout(){
  this.longinService.doLogout();
  console.log('1');
  
}
}
