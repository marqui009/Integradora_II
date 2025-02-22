import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '9c2c466280d63370ab297e2083639681';
  private apiUrl = 'https://api.weatherstack.com/current';

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?access_key=${this.apiKey}&query=${location}`);
  }
}
