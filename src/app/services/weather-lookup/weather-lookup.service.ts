import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherLookupService {
  private url = 'https://api.weatherbit.io/v2.0/forecast/daily';
  private API_KEY = '00b98435184845f98688abcd82e639f0';

  constructor(private http: HttpClient) { }

  lookupWeather(city: string, state: string) {
    const location = `${city},${state}`;
    return this.http.get(`${this.url}?city=${location}&key=${this.API_KEY}`);
  }
}
