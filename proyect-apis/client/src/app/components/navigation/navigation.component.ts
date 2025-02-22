import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/interfaces/actividades';
import {GamesService} from '../../services/games.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  user: any = [];

  usuarios: Usuarios= {
    idUsuario: undefined,
    nombre : '',
    correo: '',
    contrasena : '' ,
    telefono : undefined,
    nombreRol  : ''
  }

  constructor(private gameService: GamesService, private authService: AuthService){}
  ngOnInit(): void {

    this.authService.setCurrentUser();
    var datos:any =this.authService.getCurrentUser();
    this.usuarios = datos;
    console.log(this.usuarios);
  }
  
  

  editUser(id:string){
    console.log(id);
  }
  
}
