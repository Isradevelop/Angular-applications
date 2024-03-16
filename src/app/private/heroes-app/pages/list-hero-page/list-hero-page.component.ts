import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-hero-page',
  templateUrl: './list-hero-page.component.html',
  styleUrl: './list-hero-page.component.css'
})
export class ListHeroPageComponent implements OnInit {

  private heroesService = inject(HeroesService);

  public heroes?: Observable<Hero[]>;

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes()

  }

}
