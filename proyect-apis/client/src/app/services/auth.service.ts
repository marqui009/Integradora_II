import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: Usuarios| null = null; 
  constructor(private http: HttpClient){}


loginToServer(correo: string, password1: string){
  // Aquí realizas una solicitud HTTP al backend
  return this.http.post<Usuarios[]>('http://localhost:3000/api/login', { correo, password1 });
}
isAuthenticated(): boolean {
  return this.isLoggedIn;
}

setLoggendInStatus(status: boolean){
  this.isLoggedIn = status;
}
logout(){
  this.isLoggedIn = false;
}
setCurrentUser() {
  const sesion=sessionStorage.getItem('usuario')
  console.log(1)
  if(sesion){
    const usuario=JSON.parse(sesion);
    console.log(usuario)

    this.currentUser=usuario;
  }

}

getCurrentUser(): Usuarios | null {
  return this.currentUser;
}
}
