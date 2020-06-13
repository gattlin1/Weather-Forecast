import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forecast';
  public weeklyForecast = [
    {description: 'snowy', temp: 25, feelsLike: 13},
    {description: 'cloudy', temp: 72, feelsLike: 70},
    {description: 'thunderstorm', temp: 70, feelsLike: 68},
    {description: 'sunny', temp: 90, feelsLike: 95},
    {description: 'cloudy', temp: 72, feelsLike: 70},
    {description: 'sunny', temp: 90, feelsLike: 95},
    {description: 'thunderstorm', temp: 70, feelsLike: 68},
    {description: 'sunny', temp: 90, feelsLike: 95},
    {description: 'thunderstorm', temp: 70, feelsLike: 68},
    {description: 'snowy', temp: 25, feelsLike: 13},
    {description: 'thunderstorm', temp: 70, feelsLike: 68},
    {description: 'snowy', temp: 25, feelsLike: 13}
  ]
}
