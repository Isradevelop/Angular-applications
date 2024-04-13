import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { FlyToComponent } from './pages/fly-to/fly-to.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullScreenPageComponent
      },
      {
        path: 'zoom-range',
        component: ZoomPageComponent
      },
      {
        path: 'markers',
        component: MarkersPageComponent
      },
      {
        path: 'fly-to',
        component: FlyToComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: '**',
        redirectTo: 'fullscreen'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
