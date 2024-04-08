import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Regions } from '../../interfaces/navBarTypes.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public navBarOptions: Regions[] = ['Europe', 'America', 'Africa', 'Oceania', 'Asia'];
  public initialRegion: Regions = '';

  public placeholder: string = 'Insert country...';

  private countriesService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = true;

  public isTouchedInputSearch: boolean = false;

  public sortBy: 'country' | 'capital' | '' = ''

  ngOnInit(): void {
    const lsCountries = this.countriesService.loadFromLocalStorage();
    if (lsCountries != '') this.countriesService.cacheStorage = JSON.parse(lsCountries);
    if (this.countriesService.cacheStorage.byRegion.countries.length > 0) this.isTouchedInputSearch = true;

    this.countries = this.countriesService.cacheStorage.byRegion.countries;
    this.initialRegion = this.countriesService.cacheStorage.byRegion.region;
  }

  searchRegion(value: Regions): void {
    this.isTouchedInputSearch = true;

    this.countriesService.getCountriesByRegion(value)
      .subscribe(countries => {
        this.countries = countries;
        this.initialRegion = '';
      })
  }

  onSortBy(sortBy: 'country' | 'capital') {
    this.sortBy = sortBy;
  }

}
