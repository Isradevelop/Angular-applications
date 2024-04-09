import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    MiniMapComponent,
    SideMenuComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class MapsModule { }
