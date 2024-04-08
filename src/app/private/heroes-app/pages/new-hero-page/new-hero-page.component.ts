import { Component, OnInit, inject } from '@angular/core';
import { Hero, HeroFormFields, Publisher } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrl: './new-hero-page.component.css'
})
export class NewHeroPageComponent implements OnInit {

  private fb: FormBuilder = inject(FormBuilder);

  public heroForm = this.fb.group({
    "id": [''],
    "superhero": ['', [Validators.required, Validators.minLength(3)]],
    "publisher": new FormControl<Publisher>(Publisher.DCComics),
    "alter_ego": ['', [Validators.required, Validators.minLength(3)]],
    "first_appearance": ['', [Validators.required, Validators.minLength(5)]],
    "characters": ['', [Validators.required, Validators.minLength(5)]],
    "alt_img": [''],
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
    if (this.heroForm.invalid) {
      this.heroForm.markAllAsTouched();
      return;
    }

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

  isNotValidField(fieldName: HeroFormFields): boolean {
    return !!(this.heroForm.controls[fieldName].errors && this.heroForm.controls[fieldName].touched)
  }

  getFieldMessageErrors(fieldName: HeroFormFields) {
    if (!this.heroForm.controls[fieldName]) return null;

    const errors = this.heroForm.controls[fieldName].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required'
        case 'minlength':
          return `Min characters required: ${this.heroForm.controls[fieldName].getError('minlength').requiredLength}`
        case 'min':
          return `Min value: ${this.heroForm.controls[fieldName].getError('min').min}`
      }
    }
    return null;
  }

}
