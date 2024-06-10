import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styles: ``,
})
export class ListPagesComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((hero) => (this.heroes = hero));
  }
}
