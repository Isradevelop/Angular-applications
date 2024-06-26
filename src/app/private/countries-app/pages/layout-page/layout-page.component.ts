import { Component } from '@angular/core';
import { LayoutAlert } from '../../../../shared/interfaces/layout-alert.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  public alertContent: LayoutAlert = {
    title: 'CountriesApp',
    description: 'Angular application that shows country details, making use of the Rest countries API.',
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
        link: 'https://getbootstrap.com/'
      },
      {
        name: 'Animate CSS',
        link: 'https://animate.style/'
      },
      {
        name: 'Rest countries API',
        link: 'https://restcountries.com/'
      }
    ]
  }
}
