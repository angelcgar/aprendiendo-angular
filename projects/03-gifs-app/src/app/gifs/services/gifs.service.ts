import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey: string = 'oTswsFXuOBxTQXdWENQ1hCEiBGkPVJ9d';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs service ready');
  }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    // lo convertimos en minuscula
    tag = tag.toLowerCase();

    // nos haceguramos de que no haya un TAG repetido en todo el arreglo
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    // Cortamos el historial para que no sea muy largo
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    // Guardamos en localStorage todas la busquedas como un String
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
    //* esto puede ser null ↓
    // localStorage.setItem('primero', JSON.stringify(this._tagHistory[0]))
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    // Transformamos los String en un arreglo de string y usamos not null operation
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagHistory.length === 0) return;

    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 2)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
        console.log({ gifs: this.gifsList });
      });

    // 'https://api.giphy.com/v1/gifs/search?api_key=oTswsFXuOBxTQXdWENQ1hCEiBGkPVJ9d&q=valorat&limit=2'
  }
}
