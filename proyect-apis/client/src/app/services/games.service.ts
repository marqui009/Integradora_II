import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {Activities } from '../interfaces/actividades'
import { Usuarios} from '../interfaces/usuarios'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private baseUrl = 'http://localhost:3000/api';
    API_URI='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getact(idUsuario: number | undefined): Observable<any>{
    return this.http.get(`${this.baseUrl}/actividades/${idUsuario}`);
  }
  gethistact(idUsuario: number | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/histact/${idUsuario}`);
  } 
  getrol(){
    return this.http.get(`${this.API_URI}/rol`);
  }
  getuser(){
    return this.http.get(`${this.API_URI}/user`);
  }
  geEn(){
    return this.http.get(`${this.API_URI}/add`);
  }
  gePar(){
    return this.http.get(`${this.API_URI}/add2`);
  }
  geEst(){
    return this.http.get(`${this.API_URI}/add3`);
  }


  deleteact(id: string|number){
    return this.http.delete(`${this.API_URI}/actividades/${id}`);
  }

  saveact(activities: Activities){
    return this.http.post(`${this.API_URI}/actividades`,activities);
  }
  saveuser(usuarios: Usuarios){
    return this.http.post(`${this.API_URI}/user`,usuarios);
  }
  updateact(id: string|number,update: Activities): Observable<Activities>{
    return this.http.put(`${this.API_URI}/actividades/${id}`,update);
  }
  updateuser(id: string | number | undefined,update: Usuarios): Observable<Activities>{
    return this.http.put(`${this.API_URI}/user/${id}`,update);
  }
  getacti(id: string | number | undefined) {
    return this.http.get(`${this.API_URI}/editact/${id}`);
  }

  getuse(id: string|number) {
    return this.http.get(`${this.API_URI}/user/${id}`);
  }

}
