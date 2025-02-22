import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-hist-act',
  templateUrl: './hist-act.component.html',
  styleUrls: ['./hist-act.component.css']
})
export class HistActComponent implements OnInit {
  act: any = [];
  usuarios: Usuarios = {
    idUsuario: undefined,
    nombre: '',
    correo: '',
    contrasena: '',
    telefono: undefined,
    nombreRol: ''
  };

  constructor(private gameService: GamesService, private authService: AuthService) {}

  ngOnInit(): void {
  this.authService.setCurrentUser();
  var datos: any = this.authService.getCurrentUser();
  this.usuarios = datos;
  console.log(this.usuarios.idUsuario);

  if (this.usuarios.idUsuario !== undefined) {
    this.getAct(this.usuarios.idUsuario);
  } else {
    console.error('El idUsuario es undefined');
  }
}

getAct(idUsuario: number) {
  this.gameService.gethistact(idUsuario).subscribe(
    res => {
      console.log(res);
      this.act = res;
    },
    error => console.error(error)
  );
}

  
  editact(id:string){
    console.log(id);
  }
}
