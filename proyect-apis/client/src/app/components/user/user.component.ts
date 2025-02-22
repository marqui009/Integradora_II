import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/interfaces/actividades';
import {GamesService} from '../../services/games.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: any = [];

  usuarios: Usuarios= {
    idUsuario: undefined,
    nombre : '',
    correo: '',
    contrasena : '' ,
    telefono : '',
    nombreRol  : ''
  }

  constructor(private gameService: GamesService, private authService: AuthService, private router:Router){}
  ngOnInit(): void {
    this.authService.setCurrentUser();

    var datos:any =this.authService.getCurrentUser();
    this.usuarios = datos;
    console.log(this.usuarios);
  }

  editUser(id:string){
    console.log(id);
  }

  logOut(){
    sessionStorage.clear()
    this.authService.setCurrentUser()
    this.router.navigate(['/home']);
  }
}
