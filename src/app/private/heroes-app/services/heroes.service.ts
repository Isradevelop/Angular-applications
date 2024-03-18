import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private http = inject(HttpClient);

  private baseUrl = environment.baseHeroesUrl;

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}heroes/${id}`)
      .pipe(
        catchError((err) => {
          console.error(err);
          return of(undefined);
        })
      );
  }

  getHeroByName(): Observable<Hero[] | undefined> {
    return this.http.get<Hero[]>(`${this.baseUrl}heroes`)
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}heroes`, hero)
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.patch<Hero>(`${this.baseUrl}heroes/${hero.id}`, hero)
  }

  deleteHero(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}heroes/${id}`)
      .pipe(
        catchError(err => of(false)),
        map(resp => true)
      )
  }
}
