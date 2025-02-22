import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';

// Declaración para usar el objeto PayPal en el componente
declare var paypal: { Buttons: (arg0: { createOrder: (data: any, actions: { order: { create: (arg0: { purchase_units: { description: string; amount: { currency_code: string; value: number; }; }[]; }) => any; }; }) => any; onApprove: (data: any, actions: { order: { capture: () => any; }; }) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit, AfterViewInit {

  // Inicialización del valor para el input de pago
  inputValue: number = 0.0;

  // Referencia al elemento de PayPal y al contenedor del mapa
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef | any;
  @ViewChild('map') mapContainer: ElementRef | undefined;
  map: any;

  // Objeto que representa los datos del servicio para el pago
  servicio = {
    descripcion: 'pago',
    precio: this.inputValue
  };

  title = 'angular-paypal-payment'; // Título de la aplicación

  // Variables para las actividades y usuarios
  act: any = [];
  usuarios: any = {};

  // Constructor para los servicios que se inyectan
  constructor(private gameService: GamesService, private authService: AuthService, private router: Router) { }

  // Método ngOnInit que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Inicialización de PayPal Buttons
    paypal
      .Buttons({
        createOrder: (data: any, actions: { order: { create: (arg0: { purchase_units: { description: string; amount: { currency_code: string; value: number; }; }[]; }) => any; }; }) => {
          // Crea una orden de pago con los detalles de la compra
          return actions.order.create({
            purchase_units: [
              {
                description: this.servicio.descripcion, // Descripción del servicio
                amount: {
                  currency_code: 'MXN', // Moneda (MXN)
                  value: this.inputValue, // Valor de la compra
                }
              }
            ]
          });
        },
        onApprove: async (data: any, actions: { order: { capture: () => any; }; }) => {
          // Captura la orden una vez aprobada
          const order = await actions.order.capture();
          console.log(order); // Imprime el resultado en consola
        },
        onError: (err: any) => {
          console.log(err); // Manejo de errores
        }
      })
      .render(this.paypalElement.nativeElement); // Renderiza el botón de PayPal en el elemento HTML correspondiente

    // Inicializa el usuario actual
    this.authService.setCurrentUser();
    const userData: any = this.authService.getCurrentUser();
    this.usuarios = userData; // Asigna los datos del usuario
    console.log(this.usuarios.idUsuario);

    // Verifica si el idUsuario está presente, de lo contrario redirige
    if (this.usuarios.idUsuario !== undefined && this.usuarios.idUsuario !== null) {
      this.getAct(this.usuarios.idUsuario); // Obtiene las actividades del usuario
    } else {
      console.error('El idUsuario es undefined');
      this.router.navigate(['/home']); // Redirige si no hay idUsuario
    }
  }

  // Método que se ejecuta después de que la vista se haya inicializado
  ngAfterViewInit(): void {
    if (this.mapContainer) {
      // Inicializa el mapa con coordenadas predeterminadas
      this.map = L.map(this.mapContainer.nativeElement).setView([21.161835, -100.930117], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map); // Agrega la capa del mapa
    }
  }

  // Método que genera la ruta entre dos puntos en el mapa
  generarRuta(coordenadas: string) {
    const coordenadasArray = coordenadas.split(',').map(coord => parseFloat(coord.trim())); // Convierte las coordenadas a un array de números

    if (coordenadasArray.length === 2) {
      const destinationCoordinates: [number, number] = [coordenadasArray[0], coordenadasArray[1]]; // Define las coordenadas de destino

      // Verifica si el navegador soporta geolocalización
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation: [number, number] = [position.coords.latitude, position.coords.longitude]; // Obtiene la ubicación actual
            this.updateMapWithRoute(currentLocation, destinationCoordinates); // Actualiza el mapa con la ruta
          },
          (error) => {
            console.error('Error getting location:', error); // Manejo de errores en caso de que no se obtenga la ubicación
          }
        );
      } else {
        console.error('Geolocation is not supported in this browser.'); // Si no se soporta la geolocalización
      }
    } else {
      console.error('Invalid coordinates format:', coordenadas); // Si las coordenadas son inválidas
    }
  }

  // Método que actualiza el mapa con la ruta generada
  updateMapWithRoute(start: [number, number], end: [number, number]) {
    L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])], // Define los puntos de inicio y destino
    }).addTo(this.map); // Agrega la ruta al mapa
  }

  // Método que obtiene las actividades del usuario desde el servicio
  getAct(idUsuario: number) {
    this.gameService.getact(idUsuario).subscribe(
      res => {
        console.log(res);
        this.act = res; // Asigna las actividades obtenidas al arreglo 'act'
      },
      error => {
        console.error(error);
        this.router.navigate(['/home']); // Redirige en caso de error
      }
    );
  }

  // Método para cancelar una actividad
  cancelar(id: string) {
    if (this.usuarios.idUsuario !== undefined) {
      this.gameService.deleteact(id).subscribe(
        res => {
          console.log(res);
          this.getAct(this.usuarios.idUsuario!); // Obtiene las actividades actualizadas
          alert('Actividad Cancelada'); // Muestra un mensaje de confirmación
        },
        error => {
          console.error(error);
          this.router.navigate(['/home']); // Redirige en caso de error
        }
      );
    } else {
      console.error('idUsuario is undefined'); // Manejo de errores si idUsuario no está definido
    }
  }

  // Método para editar una actividad
  editact(id: string) {
    console.log(id); // Imprime el id de la actividad en consola
  }

  // Método que muestra el valor del input (donación)
  mostrarValor() {
    console.log('Valor del input:', this.inputValue); // Imprime el valor ingresado en el input
  }
}
