import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 2 + 2
  
  
  increaseBy(value: number):void {
    // console.log(value.toFixed);
    console.log('hola mundo');
    this.counter += value
  }
  
  resetValue(value: number): void {
    this.counter = value
  }

}
// console.log(counter);
// console.log('hola mundo');