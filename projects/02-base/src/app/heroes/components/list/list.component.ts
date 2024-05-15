import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['spiderman', 'hulk', 'ironman'];

  public deleteHero: string | undefined = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    // const data = this.heroNames.pop()
  }
}
