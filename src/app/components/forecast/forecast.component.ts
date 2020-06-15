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
  @Output() emitter = new EventEmitter();
  public cityQuery: any;

  constructor(private weather: WeatherLookupService, private iconClass: IconClassService) {
    this.icon = this.cycle[0];
  }

  ngOnInit(): void {
    setInterval(() => this.cycleIcon(), 1000);
  }

  public getWeather(city: string, state: string): void {
    this.weather.lookupWeather(city, state).subscribe((data: any) =>
      this.cityQuery = data.map((info) => new Forecast(info))
    );
    this.emitter.emit(this.cityQuery);
  }

  public cycleIcon(): void {
    const newIcon = this.cycle[Math.floor(Math.random() * this.cycle.length)];
    this.icon = this.iconClass.getIconClass(newIcon);
  }
}
