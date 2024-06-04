import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersPageComponent,
    UncommonPageComponent,
    BasicsPagesComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNGModule],
})
export class ProductsModule {}
