import { Component, OnInit, inject, signal } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-hero-page',
  templateUrl: './list-hero-page.component.html',
  styleUrl: './list-hero-page.component.css'
})
export class ListHeroPageComponent implements OnInit {

  private heroesService = inject(HeroesService);

  public heroes = signal<Hero[]>([]);

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes.set(heroes))
  }
}
