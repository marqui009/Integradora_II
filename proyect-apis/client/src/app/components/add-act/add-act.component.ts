import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from 'src/app/interfaces/actividades';
import { GamesService } from '../../services/games.service';
import { Draggable, icon, Map, marker, tileLayer, latLng, routing, Marker } from 'leaflet';
import 'leaflet-routing-machine'
import { PlacesService } from 'src/app/services/places.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-add-act', // Selector del componente
  templateUrl: './add-act.component.html', // Plantilla HTML
  styleUrls: ['./add-act.component.css'], // Estilos CSS
})
export class AddActComponent implements OnInit {
  Enc: any = []; // Lista de encargados
  Par: any = []; // Lista de participantes
  Est: any = []; // Lista de estatus

  // Cambia el lugar de la actividad
  changeLugar(lugar: string) {
    this.activities.Lugar = lugar;
  }

  // Constructor para inyectar dependencias
  constructor(
    private gameService: GamesService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private placeSvc: PlacesService
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    if (this.activities.Lugar == '') {
      // Si no hay lugar, establece un valor predeterminado
      this.changeLugar('21.168709834371708, -100.93142807890231');
    }

    this.contador = 0; // Inicializa el contador en 0

    // Retraso para obtener la ubicación geográfica del usuario
    setTimeout(() => {
      if (this.ubicacion == null) {
        // Si no hay ubicación almacenada, usa la ubicación obtenida del servicio
        this.geo = this.placeSvc.useLocation;
        localStorage.setItem('geolocalizar', JSON.stringify(this.geo));
      } else {
        localStorage.removeItem('geolocalizar');
        this.ubicacion = localStorage.getItem('geolozalizar');
      }
    }, 2000);

    // Se obtienen los datos de encargados, participantes y estatus
    this.gameService.geEn().subscribe(
      res => {
        console.log(res);
        this.Enc = res;
      },
      rep => console.error
    );
    this.gameService.gePar().subscribe(
      res => {
        console.log(res);
        this.Par = res;
      },
      rep => console.error
    );
    this.gameService.geEst().subscribe(
      res => {
        console.log(res);
        this.Est = res;
      },
      rep => console.error
    );

    // Si hay un id en la URL, carga los datos de la actividad para editar
    if (this.activateRouter.snapshot.params['id']) {
      this.gameService.getacti(this.activateRouter.snapshot.params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.activities = res;
            this.edit = true; // Marca el modo de edición
          },
          err => console.error(err)
        );
    }
  }

  @HostBinding('class') classes = 'row'; // Clase CSS para la fila del componente

  // Modelo de la actividad
  activities: Activities = {
    idActividad: undefined,
    Nombre_Actividad: '',
    Descripcion: '',
    Encargado: undefined,
    Participante: undefined,
    Estatus: '',
    Fecha_de_inicio: undefined,
    Fecha_de_fin: undefined,
    Lugar: ''
  };

  edit: boolean = false; // Bandera para saber si se está editando

  // Método para guardar una nueva actividad
  savenewactividad() {
    console.log(this.activities);
    this.gameService.saveact(this.activities)
      .subscribe(
        res => {
          console.log(res);
          alert(this.activities.Lugar); // Muestra el lugar de la actividad
          this.router.navigate(['/gestion']); // Redirige a la página de gestión
        },
        err => console.error(err)
      );
  }

  // Método para actualizar una actividad existente
  updateAct() {
    if (this.activities.idActividad !== undefined) {
      this.gameService.updateact(this.activities.idActividad, this.activities)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/gestion']); // Redirige a la página de gestión
          },
          err => console.error(err)
        );
    } else {
      console.error("idActividad is undefined");
    }
  }

  geo: any; // Variable para almacenar la ubicación geográfica
  map: any; // Variable para almacenar el mapa
  ubicacion: any; // Almacena la ubicación del usuario
  contador = 0; // Contador utilizado en el mapa

  // Método para inicializar el mapa y agregar un marcador
  ngAfterViewInit() {
    let previousMarker: Marker;

    setTimeout(() => {
      // Obtiene la ubicación almacenada en localStorage
      this.ubicacion = localStorage.getItem('geolocalizar');
      this.map = new Map('map').setView(JSON.parse(this.ubicacion), 13); // Inicializa el mapa con la ubicación

      // Carga los tiles de OpenStreetMap
      tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Al hacer clic en el mapa, coloca un marcador y actualiza el lugar
      this.map.on('click', (e: { latlng: any; }) => {
        const latlng = e.latlng;
        const marker = L.marker(latlng);
        console.log(latlng.lat, latlng.lng);
        this.map.addLayer(marker);

        // Elimina el marcador anterior si existe
        if (previousMarker) {
          previousMarker.remove();
        }

        // Si el lugar está vacío, establece un valor predeterminado
        if (this.activities.Lugar == '') {
          this.changeLugar('21.168709834371708, -100.93142807890231');
        }

        previousMarker = marker;

        // Actualiza el lugar con las coordenadas seleccionadas
        this.changeLugar(`${(latlng.lat).toFixed(6)}, ${(latlng.lng).toFixed(6)}`);
      });
    }, 2000);
  }

  // Método para mostrar la ubicación del usuario y trazar una ruta
  ubicar() {
    setTimeout(() => {
      marker(this.geo).addTo(this.map).bindPopup("<strong>Esta es tu ubicación</strong>").openPopup(); // Muestra un marcador con la ubicación
    }, 2000);
    
    this.changeLugar(this.geo); // Actualiza el lugar con la ubicación del usuario
    
    // Dibuja una ruta desde la ubicación del usuario
    routing.control({
      waypoints: [
        latLng(this.geo),
      ]
    }).addTo(this.map);
  }

  // Método para recargar la página
  recargar() {
    location.reload(); // Recarga la página
  }
}
