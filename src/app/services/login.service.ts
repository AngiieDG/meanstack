import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpHeaderResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string=null;
  user :any;
  build: Boolean = false;
  constructor(
    private http :HttpClient,
    private router: Router,
  ) { 
    console.log("Se carga el servico")
    var tok = localStorage.getItem('token');
    this.token = tok;
    /*
    var tok = localStorage.getItem('token');
    if(tok){
    console.log('1');
  this.validate_token(tok).subscribe(
    (data)=>{
      console.log('2')
        console.log(data)
        this.user=data;
        this.token=tok;
        this.router.navigate(['/dashbord']); 
        return true
      
    },(err)=>{
      this.doLogout();
      return false;
    });
    }else{
      //this.doLogout();
    }
*/
  
  }
  

setHeaders(){
  let headers = new HttpHeaders ({'Authorization':this.token});
  let reqoption = {headers:headers};
  return reqoption;
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



  setIdentity(user: any) {
    localStorage.setItem('identity', JSON.stringify(user));

}

  // Set up token on a local storage and setup in a local variable
  setToken(token: string) {
    localStorage.setItem('token', token);
    this._Token();
}


  // Load token from local storage and set up in a local variable
  _Token(){
    let token = localStorage.getItem('token');
    if(token!=undefined){
        this.token = token;
    } else{
        this.token = null;
        this._autoLogout();
    }
}

_autoLogout() {
  if ( this.router.url !== '/' ) {
      this.router.navigate(['/']);
      
  }
}

  // Validate if user is logged in
  validateLogged() {
    if(!this.token || this.token.length==0){
        this.doLogout();
    }
}

validate_token(token:string):Observable<any> {
  /*
  return new Promise((resolve,reject)=>{
    
  })*/

  let headers = new HttpHeaders ({'Authorization': token});
  let reqoption = {headers:headers};
  return this.http.post(`http://localhost:3000/api/v1/auth/validate-token`,{},reqoption)

}

guardValidateToken(token:string):Promise<any>{
  console.log(token);
  return new Promise((resolve,reject)=>{
    this.validate_token(token).subscribe(
    data=>{
      if(data){
        resolve(data);
      }error => {
        reject(error);
      }
    });

});




}

////TAREA

// TAREA 1- AGREGAR LOS GUARD PARA EL NUEVO PROYECTO 
//  guardar tooken y user data y el authguar debe responder a este servicio
//Quitar el error del comienzo
//cargar los usuarios en el nuevo proyecto
 
}