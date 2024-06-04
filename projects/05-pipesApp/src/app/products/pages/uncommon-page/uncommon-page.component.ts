import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name === 'Fernando') {
      this.name = 'Melisa';
      this.gender = 'female';
    } else if (this.name === 'Melisa') {
      this.name = 'Fernando';
      this.gender = 'male';
    }
  }

  // i18 plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernandez',
    'Eduardo',
    'Melisa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos personas esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // Async Pipe
  public myObservableTime: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos deta en la promesa.');
    }, 35000);
  });
}
