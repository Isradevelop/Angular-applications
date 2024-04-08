import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  @Input({ required: true }) countries!: Country[] | null;
  @Input({ required: true }) hasPermittedChars!: boolean;

  public sortBy: 'byCountry' | 'byCapital' | '' = '';
}
