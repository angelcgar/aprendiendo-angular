import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/produc.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'producto 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'producto 2',
      quantity: 0,
    },
  ]);

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((product) => [
          ...product,
          {
            id: product.length + 1,
            name: `Product ${product.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      // Despues de 7 emisiones detente y limpiate
      take(7),
    )
    .subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe()
  }
}
