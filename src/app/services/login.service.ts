import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string=null;
  user :any;
  constructor(
    private http :HttpClient,
    private router: Router,
  ) { 
    console.log("Se carga el servico")
    var tok  = localStorage.getItem('token');
    if(tok){
      console.log('1');
    }else{
      console.log('2');
    }
  }
  

  doLogin(email:string,password:string):Observable< any >{
    console.log(password,email);
    console.log('Hola');
    return this.http.post('http://localhost:3000/api/v1/auth/login',{email:email,password:password})
  }

    // Clear data and redirect
    doLogout(){
      localStorage.removeItem('token');
      this.router.navigate(['/']); 
      this.user = '';
      this.token ='';   
  }

  
}
