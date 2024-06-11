import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import { CardComponent } from './components/card/card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    HeroPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewPagesComponent,
    SearchPagesComponent,
    CardComponent,

    // Pipe
    ImagePipe,
     ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
