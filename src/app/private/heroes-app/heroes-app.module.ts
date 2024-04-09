import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroesNavbarComponent } from './components/heroes-navbar/heroes-navbar.component';
import { HeroesAppRoutingModule } from './heroes-app-routing.module';
import { HeroUrlPipe } from './pipes/hero-url.pipe';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListHeroPageComponent,
    NewHeroPageComponent,
    SearchHeroPageComponent,
    HeroCardComponent,
    HeroesNavbarComponent,

    // Custom pipes
    HeroUrlPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesAppRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HeroesAppModule { }
