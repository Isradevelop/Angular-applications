import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosAppRoutingModule } from './heros-app-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListHeroPageComponent,
    NewHeroPageComponent,
    SearchHeroPageComponent
  ],
  imports: [
    CommonModule,
    HerosAppRoutingModule
  ]
})
export class HerosAppModule { }
