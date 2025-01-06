import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter<string>();

  deleteCharacter(index: string): void {
    this.onDeleteCharacter.emit(index);
  }


}
