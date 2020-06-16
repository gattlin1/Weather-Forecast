import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from 'src/models/forecast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forecast';

  constructor() {
  }
}
