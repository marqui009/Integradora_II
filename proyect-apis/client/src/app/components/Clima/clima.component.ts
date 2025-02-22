import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {
  location: string = ''; // Para almacenar la ciudad ingresada
  weather: any; // Para almacenar los datos del clima
  errorMessage: string = ''; // Para mostrar errores

  constructor(private weatherService: WeatherService) {}

  obtenerClima() {
    if (!this.location) {
      this.errorMessage = 'Por favor ingresa una ciudad';
      return;
    }
    this.weatherService.getWeather(this.location).subscribe(
      (data: any) => {
        this.weather = data; // Asigna los datos del clima recibidos
        this.errorMessage = ''; // Limpiar el mensaje de error
      },
      (error) => {
        this.errorMessage = 'Hubo un problema al obtener los datos del clima';
        console.error(error);
      }
    );
  }
}
