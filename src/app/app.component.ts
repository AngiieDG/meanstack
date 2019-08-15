import { Component, ɵConsole } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 //variable con array de strings
 searchtext:string='';
  usuarios: any[]=[
    {
      name:'Fernando 1', 
      app:'Lopéz',
      apm:'Garcia',
      edad: 22,
    },
    {
      
        name:'Fernando 2', 
        app:'Peréz',
        apm:'Fernandez',
        edad: 23,
      
    },
    {
      name:'Fernando 3', 
      app:'Gutierrez',
      apm:'Nava',
      edad: 22,
    },
    


  ];
  nuevo_usuario: any={name:'',app:'',apm:'',edad:''};
  edit_user:any={name:'',app:'',apm:'',edad:''}
  selectUser(user:string){
    alert('Has seleccioando a '+ user);

  }
  addUser(){
    //console.log(this.nuevo_usuario)
    if(this.nuevo_usuario.name.length&& this.nuevo_usuario.app.length && this.nuevo_usuario.apm.length){
      this.usuarios.push(this.nuevo_usuario);
      this.nuevo_usuario="";
    }else{
      alert('Debe escribir un nombre');
    }
  }
  deleteUser(index: number){
    console.log(index)
    this.usuarios.splice(index,1);
   // console.log(this.usuarios)

  }
  updateUser(index:number){

    this.usuarios.splice(index,1,this.edit_user.name);

  }
  textSearch(){
    console.log(this.searchtext)
    var res =this.usuarios.filter((user)=>{
      return user.name == this.searchtext;
    })

  }

}
