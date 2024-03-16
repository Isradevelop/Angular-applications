import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { MaterialModule } from '../../material/material.module';
import { HeroesAppRoutingModule } from './heroes-app-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroUrlPipe } from './pipes/hero-url.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesNavbarComponent } from './components/heroes-navbar/heroes-navbar.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListHeroPageComponent,
    NewHeroPageComponent,
    SearchHeroPageComponent,
    HeroCardComponent,

    // Custom pipes
    HeroUrlPipe,
      HeroesNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesAppRoutingModule,
    MaterialModule,
  ]
})
export class HeroesAppModule { }
