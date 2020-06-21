import { Component, OnInit } from '@angular/core';


import { WeatherLookupService } from '../../services/weather-lookup/weather-lookup.service';
import { IconClassService } from '../../services/icon-class/icon-class.service';
import { Forecast } from 'src/models/forecast.model';
import { ICON_CLASSES } from 'src/models/data/iconClasses';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public icon: string;
  public cycle: Array<string>;
  public forecast: Forecast;
  public location: string;

  constructor(private weather: WeatherLookupService, private iconClass: IconClassService) {
    this.cycle = this.getClasses(ICON_CLASSES);
    this.forecast = new Forecast();
    this.location = '';
  }

  ngOnInit(): void {
    this.cycleIcon(this.cycle);
  }

  public getClasses(obj: object): Array<string> {
    const keys = Object.keys(obj);
    const values = [];

    for (const key of keys) {
      values.push(obj[key]);
    }
    return values;
  }

  public cycleIcon(cycle: Array<string>): void {
    let i = 0;
    setInterval(() => {
      this.icon = cycle[i];
      i = ++i % cycle.length;
    }, 1000);
  }

  public getWeather(city: string, state: string): void {
    this.weather.lookupWeather(city, state).subscribe((data: Forecast) => {
      this.forecast = data;
      this.setLocation();
      console.log(this.forecast);
    });
  }

  public setLocation(): void {
    this.location = '';

    if (this.forecast.city) {
      this.location += this.forecast.city;
    }
    if (this.forecast.state.match(/^[0-9]+$/) === null) {
      this.location += ', ' + this.forecast.state;
    }
    if (this.forecast.country) {
      this.location += ', ' + this.forecast.country;
    }
  }
}
