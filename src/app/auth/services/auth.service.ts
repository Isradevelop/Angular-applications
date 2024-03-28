import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthUser } from '../interfaces/authUser.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User } from '../../private/heroes-app/interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseHeroesUrl;
  private user?: AuthUser;

  private http: HttpClient = inject(HttpClient);

  get currentUser(): AuthUser | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<AuthUser> {

    return this.http.get<AuthUser>(`${this.baseUrl}users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', JSON.stringify(user)))
      )
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  checkAuthentication(): Observable<boolean> {
    let user: string | null | AuthUser = localStorage.getItem('token');

    if (!user) return of(false)

    user = JSON.parse(user) as AuthUser;

    this.user = user;

    return this.http.get(`${this.baseUrl}users/${user.id}`)
      .pipe(
        map(user => !!user),
        catchError(err => of(false))
      )

  }
}
