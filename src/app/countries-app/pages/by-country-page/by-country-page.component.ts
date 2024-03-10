import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public placeholder: string = 'Insert country...';
  public initialValue: string = '';

  private countryService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = false;

  public isTouchedInputSearch: boolean = false;

  ngOnInit(): void {
    const lsCountries = this.countryService.loadFromLocalStorage();
    if (lsCountries != '') this.countryService.cacheStorage = JSON.parse(lsCountries);

    this.countries = this.countryService.cacheStorage.byCountry.countries;
    this.initialValue = this.countryService.cacheStorage.byCountry.term;
    this.isTouchedInputSearch = true;
    this.hasPermittedChars = true;

  }

  searchCountry(value: string): void {
    this.hasPermittedChars = true;

    if (value.length >= 0 && value.length < 3) {
      this.countries = [];
      this.hasPermittedChars = false;
      return;
    }

    this.countryService.getCountriesByName(value)
      .subscribe(countries => this.countries = countries)
  }

  onIsTouched() {
    this.isTouchedInputSearch = true;
  }
}
