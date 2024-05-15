import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  // propiedad
  public name: string = 'Ironman';
  public age: number = 45;

  // propiedad
  public get CapitalizedName(): string {
    return this.name.toUpperCase();
  }
  
  // metodo
  getDescriptionHero(): string {
    // TODO
    return `${this.name} - ${this.age}`
    throw 'metodo no encontrado'
  }

  changeName(): void {
    if(this.name == 'Ironman') {
      this.name = 'spiderman'
    } else if (this.name == 'spiderman') {
      this.name = 'Ironman'
    }
  }

  changeAge() {
    this.age = 25
  }
}
