import { Component, OnInit, Output } from '@angular/core';


import { WeatherLookupService } from '../../services/weather-lookup/weather-lookup.service';
import { IconClassService } from '../../services/icon-class/icon-class.service';
import { EventEmitter } from 'protractor';
import { Forecast } from 'src/models/forecast.model';
import { ICON_CLASSES } from 'src/models/data/iconClasses';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public icon: string;
  public index: number;
  public cycle: Array<string>;
  public forecast: Forecast;

  constructor(private weather: WeatherLookupService, private iconClass: IconClassService) {
    this.cycle = this.getClasses(ICON_CLASSES);
    this.forecast = new Forecast();
  }

  ngOnInit(): void {
    this.cycleIcon(this.cycle);
  }

  public getWeather(city: string, state: string): void {
    this.weather.lookupWeather(city, state).subscribe((data: Forecast) => {
      this.forecast = data;
    });
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
}
