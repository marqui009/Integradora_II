import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password1: string = '';
  errorMessage: string = ''; // Nueva variable para almacenar el error

  constructor(private authService: AuthService, private router: Router) { 
    sessionStorage.clear();
  }

  login(): void {
    this.errorMessage = ''; // Resetea el mensaje de error antes de intentar el login
  
    this.authService.loginToServer(this.correo, this.password1).subscribe(
      response => {
        if (response.length != 0) {
          this.authService.setLoggendInStatus(true);
          this.router.navigate(['/gestion']);
          sessionStorage.setItem("usuario", JSON.stringify(response));
          this.authService.setCurrentUser();
        } else {
          // Si la respuesta es vacía, significa que el usuario no existe o la contraseña es incorrecta
          this.errorMessage = 'Correo o contraseña incorrectos. Inténtalo de nuevo.';
        }
      },
      error => {
        // Verifica si el error es un problema de conexión al servidor
        if (error.status === 0) {
          this.errorMessage = 'No se pudo conectar al servidor. Verifica tu conexión.';
        } else if (error.status === 401) {
          this.errorMessage = 'Correo o contraseña incorrectos. Inténtalo de nuevo.';
        } else {
          this.errorMessage = 'Hubo un problema con el servidor. Inténtalo más tarde.';
        }
        console.error('Error en login:', error);
      }
    );
  }
  
}