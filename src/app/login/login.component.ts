import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string='';
password:string='';


  constructor(
    private loginService : LoginService,
    private route: Router,
  ) { }

  ngOnInit() {
    console.log('Inicia componente');
    var token = localStorage.getItem('token');
    console.log(token);
  }

  Login(){
    if(this.email.length && this.password.length){
      console.log('Los datos son'+ this.email +'-'+this.password);
      this.loginService.doLogin(this.email,this.password).subscribe(
        (data)=>{
              console.log(data);
              if(data.token){
                alert('Bienvenido');
                this.route.navigate([`/dashbord`]);
                localStorage.setItem('token',data.token);
                this.loginService.user= data.user;
                this.loginService.token = data.token;

              }else{
                alert('Error: usuario o password incorrecto')
              }
        },
       (err)=>{
        console.log(err);
        alert('Ocurrio un error con el servidor');
       } 
      )

    }else{
      alert('Debe completar los datos');
    }
  }

  ngOnDestroy(){
    console.log('Termina componente');
  }

}
