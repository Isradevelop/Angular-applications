import { Component } from '@angular/core';
import { LayoutAlert } from '../../../../shared/interfaces/layout-alert.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public alertContent: LayoutAlert = {
    title: 'Maps-App',
    description: 'Angular application consisting of a crud of heroes with reactive forms.',
    tecnologies: [
      {
        name: 'Angular version 17',
        link: 'https://angular.dev/'
      },
      {
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/'
      },
      {
        name: 'Bootstrap 5',
        link: 'https://getbootstrap.com/docs/5.0'
      },
      {
        name: 'Mapbox',
        link: 'https://www.mapbox.com/'
      }
    ]
  }

}
