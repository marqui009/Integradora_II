import { Component, OnInit,HostBinding } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
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

      const params1 = this.activateRouter.snapshot.params;
             if(params1['id']){
              this.gameService.getuse(params1['id'])
              .subscribe(
                res => {
                  console.log(res)
                  this.usuarios = res;
                },
                err => console.error(err)
              )
             }
  }
  @HostBinding('class') classes = 'row';

  usuarios: Usuarios= {
    idUsuario: undefined,
    nombre : '',
    correo: '',
    contrasena : '' ,
    telefono : '',
    nombreRol  : ''
  }

  updateuser(){
    this.gameService.updateuser(this.usuarios.idUsuario,this.usuarios)
    .subscribe(
      res => { 
        console.log(res);
        alert("Usuario Actualizado");
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    );
  }


  
}
