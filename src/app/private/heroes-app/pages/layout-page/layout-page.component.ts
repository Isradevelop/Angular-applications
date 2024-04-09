import { Component } from '@angular/core';
import { LayoutAlert } from '../../../../shared/interfaces/layout-alert.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public alertContent: LayoutAlert = {
    title: 'Heroes-App',
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
        name: 'Angular Material',
        link: 'https://material.angular.io/'
      },
      {
        name: 'Npm json-server',
        link: 'https://www.npmjs.com/package/json-server'
      }
    ]
  }
}
