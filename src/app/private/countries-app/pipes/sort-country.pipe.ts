import { Pipe, type PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Pipe({
  name: 'sortCountry'
})
export class SortCountryPipe implements PipeTransform {

  transform(countries: Country[], sortBy: 'country' | 'capital' | '' = ''): Country[] {

    let sortedCountries: Country[] = [];

    switch (sortBy) {
      case 'country':
        sortedCountries = countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1)
        break
      case 'capital':
        sortedCountries = countries.sort((a, b) => a.capital > b.capital ? 1 : -1)
        break
      default:
        sortedCountries = countries
    }
    return sortedCountries;
  }

}
