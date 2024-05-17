import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

console.log(uuid());

import { Character } from '../interfaces/characters.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    // console.log('MainPage')
    // console.log(character);

    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
    console.log(typeof character);
  }

  // onDeleteCharacter(index: number): void {
    // this.characters.slice(index, 1);
    deleteCharacterById(id: string) {
      this.characters = this.characters.filter(character => character.id !== id)
    // console.log(typeof this.characters);

    // let removed = this.characters.slice(index, 1)
    // this.characters
    // console.log(removed[index].name);
    // console.log(removed);

    // console.log('main page');
    // console.log(index);
  }

  // constructor() {}
}
