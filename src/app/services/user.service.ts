import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient,HttpHeaderResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import {User} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient, 
    private loginService : LoginService) 
    {  
        console.log('Componente usuarios');
    }
    getAllUser():Observable< User[]> {
      return this.http.get<User[]>(`http://localhost:3000/api/v1/usuarios`,this.loginService.setHeaders()).pipe(map((data)=>convertData(data)))

    }
    newUser(user: User):Observable<User>{
      return this.http.post<User>(`http://localhost:3000/api/v1/usuarios`,user,this.loginService.setHeaders()).pipe(map((data)=>convertData(data)))
    }
    getRoles():Observable< any[]> {
      return this.http.get<any[]>(`http://localhost:3000/api/v1/roles`,this.loginService.setHeaders()).pipe(map((data)=>convertData(data)))

    }

    delete(id :string):Observable<any>{
      return this.http.delete<any>(`http://localhost:3000/api/v1/usuarios/${id}`,this.loginService.setHeaders()).pipe(map((data)=>convertData(data)))
 
    }
    edit(user:User):Observable<User>{
      if(user._id)
      return this.http.patch<User>(`http://localhost:3000/api/v1/usuarios/${user._id}`,user,this.loginService.setHeaders()).pipe(map((data)=>convertData(data)))
  
    }
}
function convertData(data :any){
  console.log(data)
  return data.data || data;
 
}
