import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cahe-store.interface';
import { environment } from '../../../../environments/environment.development';
import { Regions } from '../interfaces/navBarTypes.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private http: HttpClient = inject(HttpClient);

  private baseUrl: string = environment.baseCountriesUrl;

  private _regions: Regions[] = ['Europe', 'America', 'Oceania', 'Asia', 'Africa'];

  public cacheStorage: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  };

  get regions() {
    return [...this._regions]
  }

  getCountriesByCapital(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${term}`;
    return this.getApiCountries(url)
      .pipe(
        tap((countries) => {
          this.cacheStorage.byCapital = { term, countries };
          this.saveToLocalStorage(this.cacheStorage);
        })
      );
  }

  getCountriesByName(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${term}`;
    return this.getApiCountries(url)
      .pipe(
        tap((countries) => {
          this.cacheStorage.byCountry = { term, countries };
          this.saveToLocalStorage(this.cacheStorage);
        })
      );
  }

  getCountriesByRegion(term: Regions): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${term}`;
    return this.getApiCountries(url)
      .pipe(
        tap((countries) => {
          this.cacheStorage.byRegion = { region: term, countries };
          this.saveToLocalStorage(this.cacheStorage);
        })
      );
  }

  getApiCountries(url: string): Observable<Country[]> {

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      );

  }

  saveToLocalStorage(countries: CacheStore): void {

    localStorage.setItem('countries', JSON.stringify(countries));
  }

  loadFromLocalStorage(): string {
    return localStorage.getItem('countries') || '';
  }

  getApiCountriesByCountryAlphaCode(alphaCode: string): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${alphaCode}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(err => of(null))
      );

  }

}
