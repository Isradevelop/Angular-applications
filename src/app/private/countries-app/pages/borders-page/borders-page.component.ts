import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { filter, map, switchMap, tap } from 'rxjs';
import { Regions } from '../../interfaces/navBarTypes.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-borders-page',
  templateUrl: './borders-page.component.html',
  styleUrl: './borders-page.component.css'
})
export class BordersPageComponent implements OnInit {

  private fb = inject(FormBuilder);
  private countriesService: CountriesService = inject(CountriesService);

  public regions = this.countriesService.regions;
  public countries: Country[] = [];
  public borders: string[] | null = [];


  public bordersForm = this.fb.group({
    regions: ['', [Validators.required]],
    country: ['', [Validators.required]],
    borders: ['', [Validators.required]],
  })

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  private onRegionChange(): void {
    this.bordersForm.get('regions')!.valueChanges
      .pipe(
        tap(() => this.bordersForm.get('country')!.setValue('')),
        switchMap(region => this.countriesService.getCountriesByRegion(region as Regions))
      )
      .subscribe((countries) => this.countries = countries)
  }

  private onCountryChange(): void {
    this.bordersForm.get('country')!.valueChanges
      .pipe(
        filter(country => country!.length > 0),
        tap(() => this.bordersForm.get('borders')!.setValue('')),
        switchMap(country => this.countriesService.getApiCountriesByCountryAlphaCode(country as string))
      )
      .subscribe((countries) => this.borders = countries!.borders)
  }

}
