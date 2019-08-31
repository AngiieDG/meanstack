import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string='';
password:string='';
isLoading: Boolean;
loginForm = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(5)]),
});
///
color = 'primary';
mode = 'indeterminate';


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
    this.isLoading = true;
     // console.log('Los datos son'+ this.email +'-'+this.password);
      this.loginService.doLogin(this.loginForm.get('email').value,this.loginForm.get('password').value).subscribe(
        (data)=>{
              console.log(data);
              if(data.token){
                alert('Bienvenido');
                this.route.navigate([`/dashbord`]);
                localStorage.setItem('token',data.token);
                this.loginService.user= data.user;
                this.loginService.token = data.token;

              }else{
                alert('Error: usuario o password incorrecto');
                this.isLoading= false;

              }
        },
       (err)=>{
        console.log(err);
        this.isLoading= false;
        alert('Ocurrio un error con el servidor');
       } 
      )

  }
  pruebas(){
    console.log('pruebas')
    console.log(this.loginForm.get('email'));
  }

  ngOnDestroy(){
    console.log('Termina componente');
  }

}
