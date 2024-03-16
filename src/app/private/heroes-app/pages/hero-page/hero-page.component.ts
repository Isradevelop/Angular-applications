import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router)
  private heroesService: HeroesService = inject(HeroesService);

  public id: string | null = '';
  public hero?: Hero;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      .subscribe((hero) => {
        if (!hero) {
          this.goBack();
        }
        this.hero = hero;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('private/heroes/list');
  }
}
