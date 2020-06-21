import { Component, OnInit, Input} from '@angular/core';
import { IconClassService } from 'src/app/services/icon-class/icon-class.service';
import { ForecastInfo } from 'src/models/forecastInfo.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() forecast: ForecastInfo;
  public cycle: Array<string>;
  public icon: string;

  constructor(private iconClassService: IconClassService) {
    this.icon = '';
  }

  ngOnInit(): void {
    console.log(this.forecast.description);
    this.cycle = this.iconClassService.getIconClasses(this.forecast.description);
    this.cycleIcon(this.cycle);
  }

  public cycleIcon(cycle: Array<string>): void {
    console.log(this.cycle);
    let i = 0;
    setInterval(() => {
      this.icon = cycle[i];
      i = ++i % cycle.length;

    }, 1000);
  }
}
