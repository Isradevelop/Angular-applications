import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public placeholder: string = 'Insert capital...';
  public initialValue: string = '';

  private countriesService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = false;

  public isTouchedInputSearch: boolean = false;

  ngOnInit(): void {
    const lsCountries = this.countriesService.loadFromLocalStorage();
    if (lsCountries != '') this.countriesService.cacheStorage = JSON.parse(lsCountries);

    this.countries = this.countriesService.cacheStorage.byCapital.countries;
    this.initialValue = this.countriesService.cacheStorage.byCapital.term;
    this.isTouchedInputSearch = true;
    this.hasPermittedChars = true;

  }

  searchCapital(value: string): void {

    this.hasPermittedChars = true;

    if (value.length >= 0 && value.length < 3) {
      this.countries = [];
      this.hasPermittedChars = false;
      return;
    }

    this.countriesService.getCountriesByCapital(value)
      .subscribe(countries => this.countries = countries)
  }

  onIsTouched() {
    this.isTouchedInputSearch = true;
  }
}
