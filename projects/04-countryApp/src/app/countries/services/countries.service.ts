import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region';
import { opRegion } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: undefined, countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) {
      return;
    }

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000)
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const URL: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(URL).pipe(
      map((country) => (country.length > 0 ? country[0] : null)),
      catchError(() => of(null))
    );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const URL: string = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(URL).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByCountry(term: string): Observable<Country[]> {
    const URL: string = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(URL).pipe(
      tap((countries) => (this.cacheStore.byCountries = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByRegion(region: opRegion): Observable<Country[]> {
    const URL: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(URL).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
}
