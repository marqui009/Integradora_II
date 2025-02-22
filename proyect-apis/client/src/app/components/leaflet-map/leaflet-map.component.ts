import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map', // Define el nombre del selector para usar este componente en otros templates
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {
  @Input() coordenadas: number[] = [0, 0]; // Recibe coordenadas como entrada, con valores predeterminados [0, 0]

  map: L.Map | undefined; // Variable para almacenar la instancia del mapa

  ngOnInit(): void {
    this.initializeMap(); // Llama a la función para inicializar el mapa cuando el componente se carga
  }

  private initializeMap(): void {
    const latLng: L.LatLngExpression = [this.coordenadas[0], this.coordenadas[1]]; // Convierte las coordenadas en una expresión válida para Leaflet
    
    // Crea el mapa y lo centra en las coordenadas dadas con un nivel de zoom de 13
    this.map = L.map('leaflet-map').setView(latLng, 13);

    // Agrega una capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors' // Atribución requerida por OpenStreetMap
    }).addTo(this.map);

    // Agrega un marcador en las coordenadas dadas
    L.marker(latLng).addTo(this.map);
  }
}