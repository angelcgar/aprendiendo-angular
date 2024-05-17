import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'trunks',
      power: 10
    }
  ]
  
  // onDelete = Index value : number
  @Output()  
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id: string): void {
    // TODO BUSCAR el indice
    // console.log(index);
    this.onDelete.emit(id)
    
  }
}
