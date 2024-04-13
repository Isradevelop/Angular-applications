import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = [
    { name: 'Fullscreen', path: '../fullscreen' },
    { name: 'Zoom range', path: '../zoom-range' },
    { name: 'Markers', path: '../markers' },
    { name: 'Fy to', path: '../fly-to' },
    { name: 'Properties', path: '../properties' }
  ];

}
