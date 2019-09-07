import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  providers: [UserService],
}) 
export class DashbordComponent implements OnInit {
usuarios :  User[]=[];
roles : any[];
search : User[];
usersearch: String = '';
//nuevo_usuario= new User();

userForm = new FormGroup({
  fisrtname: new FormControl('',[Validators.required]),
  lastname: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.email]),
  brith_date:new FormControl('',[Validators.required]),
  tel:new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  _role:new FormControl(this.roles,[Validators.required]),

});

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
          console.log(this.roles);
      },(err)=>{
          console.log(err)
      }
    )
  }, 100);
  }

doLogout(){
  this.longinService.doLogout();
  console.log('1');  
}
addUser(){
  console.log('Nuevo Usuario')
  if(this.userForm.get('_id')){
    this.userService.edit(this.userForm.value).subscribe(
      (data) => {
        if (data._id) {
          console.log('Usuario actualizado');
          this.userForm.reset();
          this.reloadView();
  
        }
  
      }, (err) => {
        console.log(err);
  
      });
  
  }else{
    this.userService.newUser(this.userForm.value).subscribe(
      (data)=>{
        if(data._id){
          console.log('Usuario creado');
          this.userForm.reset();
        }

    },(err)=>{
      console.log(err);
      
    });

  }
  
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
  console.log(user)
//this.userForm = user;
  this.userForm = new FormGroup({
    _id: new FormControl(user._id),
    fisrtname: new FormControl(user.fisrtname,[Validators.required]),
    lastname: new FormControl(user.lastname,[Validators.required]),
    email: new FormControl(user.email,[Validators.required,Validators.email]),
    brith_date:new FormControl(user.brith_date,[Validators.required]),
    tel:new FormControl(user.tel,[Validators.required]),
    _role:new FormControl(user._role,[Validators.required]),
  
  });
  console.log('datos Actualizados',this.userForm.value)

}
actualizarUser(){
  console.log('Se guarda' +this.userForm.value);
  this.userService.edit(this.userForm.value).subscribe(
    (data) => {
      if (data._id) {
        console.log('Usuario actualizado');
        this.userForm.reset();
        this.reloadView();

      }

    }, (err) => {
      console.log(err);

    });

}
applyFilter(filterValue: string) {

} 
reloadView(): void{
  this.usuarios.length = 0;
  this.ngOnInit();
} 
cancelUser(){
  //console.log('Limpia datos');
  this.userForm.reset();
}
////cambiar (actualización) => password 
///poner un boton cancelar / regresar a vacio y si actualiza se debe actualizar la lista después de actualizar el usuario 
///*******tema siguiente semana */
///RouteGuars/pipes


ImuebleFiltered(){
  setTimeout( () => {

  //this._initialService();
  //console.log(this._initialService());   
   this.usuarios = this.search;
   
   if (!this.usuarios) {
     console.log("No existen datos ");
     return [];
   }
   else {
     return this.usuarios= this.usuarios.filter((el) => {
       console.log(el);
       return (( el.fisrtname).toLowerCase().indexOf(this.usersearch.toLowerCase()) !== -1)
     });
   }
  }, 100);
 }

















}
/*****TAREA */
///Crear un evento que busque los usuario y agregar la barra de busqueda

