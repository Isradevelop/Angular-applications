import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country, Cuc } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  private countriesService: CountriesService = inject(CountriesService);

  public country?: Country | null;
  public languages?: string[];
  public currencies?: Cuc[];

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.getApiCountriesByCountryAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) this.router.navigateByUrl('')

        this.country = country;
        this.languages = Object.values(country!.languages);
        this.currencies = Object.values(country!.currencies);
      })
  }



}
