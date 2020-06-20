import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconClassService {

  constructor() { }

  public getIconClass(weatherDescription: string): string {
    const description = weatherDescription.toLowerCase();

    if (description.includes('rain')) {
      return 'fas fa-cloud-rain';
    }

    switch (description) {
      case 'sunny': {
        return 'fas fa-sun';
      }
      case 'cloudy': {
        return 'fas fa-cloud';
      }
      case 'thunderstorm': {
        return 'fas fa-bolt';
      }
      case 'snowy': {
        return 'far fa-snowflake';
      }
      default: {
        return '';
      }
    }
  }
}
