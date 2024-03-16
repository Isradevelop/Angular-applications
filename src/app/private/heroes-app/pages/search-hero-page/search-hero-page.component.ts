import { Component, inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styleUrl: './search-hero-page.component.css'
})
export class SearchHeroPageComponent {
  private heroesService: HeroesService = inject(HeroesService);

  public heroes: Hero[] = [];
  public isTouchedInput: boolean = false;

  searchHero(heroName: string): void {

    if (heroName.trim().length === 0) {

      this.isTouchedInput = false;
      this.heroes = [];

    } else {
      this.heroesService.getHeroByName()
        .subscribe(heroes => {
          if (heroName.length > 0) this.isTouchedInput = true;
          if (heroes) {
            this.heroes = heroes.filter((hero) => {
              return hero.superhero.toLowerCase().includes(heroName.trim().toLowerCase())
            });
          }
        });
    }
  }

}
