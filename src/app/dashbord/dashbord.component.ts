import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  providers: [UserService]
})
export class DashbordComponent implements OnInit {
usuarios :  User[]=[];
roles : any[];
nuevo_usuario= new User();
  constructor(
    public longinService: LoginService,
    private userService :UserService
  ) { }

  ngOnInit() {
    setTimeout( () => {
      this.userService.getAllUser().subscribe(
        (data)=>{
          this.usuarios= data;
            console.log(data);
        },(err)=>{
            console.log(err)
        }
      )


    this.userService.getRoles().subscribe(
      (data)=>{
        this.roles= data;
          console.log(data);
      },(err)=>{
          console.log(err)
      }
    )
  }, 3000);
  }

doLogout(){
  this.longinService.doLogout();
  console.log('1');  
}
addUser(){
    this.userService.newUser(this.nuevo_usuario).subscribe(
      (data)=>{
        if(data._id){
          console.log('Usuario creado');
          this.nuevo_usuario =  new User();
        }

    },(err)=>{
      console.log(err);
      
    });
}
deleteUser(id){
  this.userService.delete(id).subscribe(
    (data)=>{
      if(data.deletedCount == 1)
      console.log('Usuario eliminado');
      this.usuarios;
    },(err)=>{
      console.log('error');
    }
  )
}
editUser(user){
  this.nuevo_usuario= user;
  console.log(user);
  console.log('datos Actualizado',this.nuevo_usuario)

}
actualizarUser(){
  console.log('Se guarda');
  this.userService.edit(this.nuevo_usuario).subscribe(
    (data) => {
      if (data._id) {
        console.log('Usuario actualizado');
        this.nuevo_usuario = new User();
      }

    }, (err) => {
      console.log(err);

    });

}
////cambiar (actualización) => password 
///poner un boton cancelar / regresar a vacio y si actualiza se debe actualizar la lista después de actualizar el usuario 
///*******tema siguiente semana */
///RouteGuars/pipes
}
