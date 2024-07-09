import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
  output,
} from '@angular/core';

import { Product } from '@interfaces/produc.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  // @Input({ required: true })
  // public product!: string;

  public product = input.required<Product>();

  public onIncrementQuantity = output<number>()
}
