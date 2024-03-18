import { Component, OnInit, inject } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrl: './new-hero-page.component.css'
})
export class NewHeroPageComponent implements OnInit {

  public heroForm = new FormGroup({
    "id": new FormControl(''),
    "superhero": new FormControl('', { nonNullable: true }),
    "publisher": new FormControl<Publisher>(Publisher.DCComics),
    "alter_ego": new FormControl(''),
    "first_appearance": new FormControl(''),
    "characters": new FormControl(''),
    "alt_img": new FormControl('')
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' }
  ];

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private heroesService: HeroesService = inject(HeroesService);
  private _snackBar: MatSnackBar = inject(MatSnackBar);


  get hero() {
    const currentHero = this.heroForm.value as Hero;
    return currentHero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      .subscribe((hero) => {

        if (!hero) this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
      })
  }

  onSave() {
    if (this.heroForm.invalid) return;

    if (this.hero.id) {
      this.heroesService.updateHero(this.hero)
        .subscribe(hero => {
          this.router.navigate(['private/heroes/', hero.id])
          this._snackBar.open(`Updated hero ${hero.superhero}`, 'X', {
            duration: 2500,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        })
    }

    this.heroesService.addHero(this.hero)
      .subscribe((hero) => {
        this.router.navigate(['private/heroes/', hero.id])
        this._snackBar.open(`Created hero ${hero.superhero}`, 'X', {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      })
  }

  deleteHero() {
    this.heroesService.deleteHero(this.hero.id)
      .subscribe((resp) => {
        this.router.navigateByUrl('private/heroes/list')
        this._snackBar.open(`Deleted hero ${this.hero.superhero}`, 'X', {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      })
  }
}
