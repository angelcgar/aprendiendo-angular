import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter {{ counter }}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetValue(1)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {

  public counter: number = 12
  
  
  increaseBy(value: number):void {
    // console.log(value.toFixed);
    console.log('hola mundo');
    this.counter += value
  }
  
  resetValue(value: number): void {
    this.counter = value
  }



}
