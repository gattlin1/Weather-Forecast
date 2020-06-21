import { Injectable } from '@angular/core';
import { ICON_CLASSES } from 'src/models/data/iconClasses';

@Injectable({
  providedIn: 'root'
})
export class IconClassService {

  public getIconClasses(weatherDescription: string): Array<string> {
    const descriptions = weatherDescription.toLowerCase().split(' ');
    const icons: Array<string> = [];
    const classes = Object.keys(ICON_CLASSES);

    // tslint:disable-next-line: forin
    for (const description of descriptions) {
      for (const c of classes) {
        if (description.includes(c)) {
          console.log(ICON_CLASSES[c]);
          icons.push(ICON_CLASSES[c]);
        }
      }
    }
    return icons;
  }
}
