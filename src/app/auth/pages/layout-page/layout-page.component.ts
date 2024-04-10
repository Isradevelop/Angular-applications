import { Component } from '@angular/core';
import { LayoutAlert } from '../../../shared/interfaces/layout-alert.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public alertContent: LayoutAlert = {
    title: 'Auth System',
    description: `Basic authentication system without backend. 
    You can log in to the application using the credentials: Email: john.due@gmail.com. Password: 1234`,
    tecnologies: [
      {
        name: 'Angular guards',
        link: 'https://angular.io/api/router/CanMatchFn'
      },
      {
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/'
      },
      {
        name: 'Angular material',
        link: 'https://material.angular.io/'
      },
      {
        name: 'Npm json-server',
        link: 'https://www.npmjs.com/package/json-server'
      },
      {
        name: 'Rest countries API',
        link: 'https://restcountries.com/'
      }
    ]
  }
}
