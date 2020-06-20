import { Component, OnInit, Output } from '@angular/core';


import { WeatherLookupService } from '../../services/weather-lookup/weather-lookup.service';
import { IconClassService } from '../../services/icon-class/icon-class.service';
import { EventEmitter } from 'protractor';
import { Forecast } from 'src/models/forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public icon: string;
  public cycle = ['sunny', 'thunderstorm', 'snowy', 'cloudy'];
  public forecast: Forecast;

  constructor(private weather: WeatherLookupService, private iconClass: IconClassService) {
    this.icon = this.cycle[0];
    this.forecast = new Forecast();
  }

  ngOnInit(): void {
    setInterval(() => this.cycleIcon(), 1000);
  }

  public getWeather(city: string, state: string): void {
    this.weather.lookupWeather(city, state).subscribe((data: Forecast) => {
      this.forecast = data;
    });
  }

  public cycleIcon(): void {
    const newIcon = this.cycle[Math.floor(Math.random() * this.cycle.length)];
    this.icon = this.iconClass.getIconClass(newIcon);
  }
}
