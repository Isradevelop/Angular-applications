import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-navbar',
  templateUrl: './heroes-navbar.component.html',
  styleUrl: './heroes-navbar.component.css'
})
export class HeroesNavbarComponent {

  public sidebarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Add', icon: 'add', url: './new-hero' },
    { label: 'Search', icon: 'search', url: './search' }
  ]

}
