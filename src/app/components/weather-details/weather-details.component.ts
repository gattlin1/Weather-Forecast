import { Component, OnInit, Input} from '@angular/core';
import { IconClassService } from 'src/app/services/icon-class/icon-class.service';
import { ForecastInfo } from 'src/models/forecastInfo.model';
import { ICON_CLASSES } from 'src/models/data/iconClasses';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() forecast: ForecastInfo;
  public cycle: Array<string>;
  public icon: string;
  public wind: string;

  constructor(private iconClassService: IconClassService) {
    this.icon = '';
    this.wind = ICON_CLASSES.wind;

  }

  ngOnInit(): void {
    this.cycle = this.iconClassService.getIconClasses(this.forecast.description);
    this.cycleIcon(this.cycle);
  }

  public cycleIcon(cycle: Array<string>): void {
    let i = 0;
    setInterval(() => {
      this.icon = cycle[i];
      i = ++i % cycle.length;

    }, 1000);
  }
}
