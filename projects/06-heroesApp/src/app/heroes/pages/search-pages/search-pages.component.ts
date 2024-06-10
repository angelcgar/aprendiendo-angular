import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/hero.interfaces';
import { HeroService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styles: ``,
})
export class SearchPagesComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  searchHero(): void {
    const value: string = this.searchInput.value ?? '';

    this.heroService
      .getSuggestions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }
}
