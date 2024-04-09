import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { LayoutAlertComponent } from './components/layout-alert/layout-alert.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    LayoutAlertComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    LayoutAlertComponent
  ]
})
export class SharedModule { }
