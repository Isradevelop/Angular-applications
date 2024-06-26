import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { PrivateNavbarComponent } from './components/private-navbar/private-navbar.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PrivateNavbarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FooterComponent
  ]
})
export class PrivateModule { }
