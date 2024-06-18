import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({ email });

    // No te confiez de los instructores, prubalo tu mismo
    // para que entiendas por que pasan las cosas
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscribe) => {
        console.log({ email });

        if (email === 'fernando@google.com') {
          subscribe.next({ emailTaken: true });
          subscribe.complete();
        }

        subscribe.next(null);
        subscribe.complete();
      }
    ).pipe(delay(3000));

    return httpCallObservable;
  }

  //   return of({
  //     emailToken: true,
  //   }).pipe(delay(2000));

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email });

  //   return of({
  //     emailToken: true,
  //   }).pipe(delay(2000));
  // }
}
