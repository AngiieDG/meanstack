import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service'; 
 ///Protege la ruta revisando los datos del token
 //ng guard name
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(   
     private loginService :LoginService
    )
    {console.log('AuthGuard')}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    if(this.loginService.token && this.loginService.user){
      console.log('satisfactorio')
      return true;
    }else{
      if(this.loginService.token){
    var response = await this.loginService.guardValidateToken(this.loginService.token);
    if (response && response['._id']){
      this.loginService.user = response;
      console.log('tiene usuario');
      return true;

    }else{
     // this.loginService.doLogout();
     console.log('error')
      return false;
    }
      }else{
        console.log('error')
        return false;

      }

    }

  }
  
}
