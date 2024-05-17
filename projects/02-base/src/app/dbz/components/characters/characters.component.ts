import { Character } from './../../interfaces/characters.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // debugger;
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 }
    console.log(this.character);
  }
}
