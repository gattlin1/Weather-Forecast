import { Component, OnInit, Input} from '@angular/core';
import { IconClassService } from 'src/app/services/icon-class/icon-class.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() forecast: {description: string, temp: number, feelsLike: number };
  public icon: string;

  constructor(private iconClassService: IconClassService) {
  }

  ngOnInit(): void {
    this.icon = this.iconClassService.getIconClass(this.forecast.description);
  }



}
