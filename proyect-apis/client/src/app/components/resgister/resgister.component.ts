import { Component, OnInit,HostBinding } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import {GamesService} from '../../services/games.service';
@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent {
  rol: any = [];
  constructor(private gameService: GamesService, private router: Router, private activateRouter : ActivatedRoute){}
  ngOnInit(): void {
    this.gameService.getrol().subscribe(
      res => {
        console.log(res),
        this.rol = res
      },
      rep => console.error
      );
  }
  @HostBinding('class') classes = 'row';

  usuarios: Usuarios= {
    idUsuario: 0,
    nombre : '',
    correo: '',
    contrasena : '' ,
    telefono : '',
    nombreRol  : ''
  }

  savenewUser() {
    console.log(this.usuarios);
    this.gameService.saveuser(this.usuarios)
    .subscribe(
      res => {
      console.log(res);
      this.router.navigate(['/login']);
    },
    err => console.error(err)
    )
  }
}
