import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const URL: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(URL).pipe(
      map((country) => (country.length > 0 ? country[0] : null)),
      catchError(() => of(null))
    );
  }

  searchByCapital(capital: string): Observable<Country[]> {
    const URL: string = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(URL).pipe(catchError(() => of([])));
  }

  searchByCountry(country: string): Observable<Country[]> {
    const URL: string = `${this.apiUrl}/name/${country}`;
    return this.http.get<Country[]>(URL).pipe(catchError(() => of([])));
  }

  searchByRegion(region: string): Observable<Country[]> {
    const URL: string = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(URL).pipe(catchError(() => of([])));
  }
}
