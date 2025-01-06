import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from '../../interfaces/character';

@Component({
  selector: 'app-dbz-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public newCharacter: Character = { name: '', power: 0 };

  addCharacter(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit({...this.newCharacter});
    this.newCharacter.name = '';
    this.newCharacter.power = 0;
  }
}
