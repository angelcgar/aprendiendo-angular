import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component'



@NgModule({
  declarations: [MainPageComponent, ListComponent, CharactersComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
